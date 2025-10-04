
import { auth, signIn, signOut } from "@/auth"
 
export default async function SignIn() {
  const session = await auth()
  var email = "nobody"
  if (session) {
    email = session.user?.email ?? "nobody"
  }

  return (
    <div>
      <div>{email}</div>
      <form
        action={async () => {
          "use server"
          await signIn("github")
        }}
      >
        <button type="submit">Signin </button>
      </form>
            <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Signout </button>
      </form>

    </div>
  )
} 