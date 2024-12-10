import LoginComponent from "@/components/LoginComponent/LoginComponent";
import LoginHeader from "@/components/LoginHeader/LoginHeader";

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-14 gap-8 min-h-screen bg-primary text-secondary py-8">
      <LoginHeader />
      <LoginComponent />
    </div>
  );
};

export default Login;
