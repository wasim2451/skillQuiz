interface Props { }
import LoginForm from "@/components/my-components/LoginForm";
function LoginPage() {

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
                <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
                <LoginForm />
            </div>
        </main>
    )
}

export default LoginPage;
