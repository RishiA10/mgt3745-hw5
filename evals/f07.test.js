const test = require('node:test');
const assert = require('node:assert/strict');

const API = process.env.API;

if (!API) {
  throw new Error('Set API to the deployed Worker URL before running tests.');
}

test('F-07 Event-driven overlap: GET /entries provides data that identifies an overlapping availability entry', async () => {
  const response = await fetch(`${API}/entries`);
  assert.equal(response.status, 200);

  const entries = await response.json();
  assert.ok(Array.isArray(entries));

  const practice = {
    date: '2026-09-25',
    startTime: '19:00',
    endTime: '21:00'
  };

  const conflicts = entries.filter(entry =>
    entry.date === practice.date &&
    entry.startTime < practice.endTime &&
    practice.startTime < entry.endTime
  );

  assert.ok(conflicts.length >= 1);
});

test('F-07 Event-driven no overlap: GET /entries supports reporting no conflicts for a non-overlapping practice', async () => {
  const response = await fetch(`${API}/entries`);
  assert.equal(response.status, 200);

  const entries = await response.json();

  const practice = {
    date: '2026-09-25',
    startTime: '14:00',
    endTime: '15:00'
  };

  const conflicts = entries.filter(entry =>
    entry.date === practice.date &&
    entry.startTime < practice.endTime &&
    practice.startTime < entry.endTime
  );

  assert.equal(conflicts.length, 0);
});

test('F-07 Unwanted missing fields: Worker rejects an availability POST with required time information missing', async () => {
  const response = await fetch(`${API}/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      date: '2026-10-01',
      startTime: '18:00'
    })
  });

  assert.equal(response.status, 400);
  assert.match(await response.text(), /required/i);
});

test('F-07 Unwanted invalid time order: Worker rejects an end time that is not after its start time', async () => {
  const response = await fetch(`${API}/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      date: '2026-10-01',
      startTime: '20:00',
      endTime: '19:00',
      reason: 'HW5 verification'
    })
  });

  assert.equal(response.status, 400);
  assert.match(await response.text(), /end time must be later than start time/i);
});
