import RegisterComponent from "@/components/RegisterComponent/RegisterComponent";
import RegisterHeader from "@/components/RegisterHeader/RegisterHeader";

const page = () => {
  return (
    <div className="flex flex-col items-center mt-14 gap-8 min-h-screen bg-primary text-secondary py-8">
      <RegisterHeader />
      <RegisterComponent />
    </div>
  );
};

export default page;
