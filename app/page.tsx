import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/dashboard' : '/sign-in'

  return (
    <div>
    </div>
  );
}
