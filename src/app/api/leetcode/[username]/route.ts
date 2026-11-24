import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  context: { params: Promise<{ username: string }> }
) {
  const { username } = await context.params;

  try {
    const year = new Date().getUTCFullYear();
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query:
          'query UserProfileCalendar($username: String!, $year: Int) { matchedUser(username: $username) { submissionCalendar(year: $year) submitStats { acSubmissionNum { difficulty count submissions } } } }',
        variables: { username, year },
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json({ username, calendar: null, solved: 744 }, { status: 200 });
    }

    const payload = await response.json();
    const matchedUser = payload?.data?.matchedUser;
    const calendar = matchedUser?.submissionCalendar
      ? JSON.parse(matchedUser.submissionCalendar)
      : null;
    const solved = matchedUser?.submitStats?.acSubmissionNum?.find(
      (entry: { difficulty: string }) => entry.difficulty === 'All'
    )?.count;

    return NextResponse.json({
      username,
      calendar,
      solved: typeof solved === 'number' ? solved : 744,
    });
  } catch {
    return NextResponse.json({ username, calendar: null, solved: 744 }, { status: 200 });
  }
}
