import Image from "next/image";
import { signIn } from "next-auth/react";
("next-auth/client");

const Login = () => {
  return (
    // <div className="flex flex-col items-center mt-8">
    //   <Image
    //     src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="Facebook"
    //     width={200}
    //     height={200}
    //   />
    //   <a
    //     onClick={signIn}
    //     className="p-4 mt-6 cursor-pointer bg-blue-500 rounded-full text-white">
    //     Login with Facebook
    //   </a>
    // </div>
    <div className="flex flex-col items-center mx-auto">
      <Image
        src="https://i.imgur.com/TdaApAh.png" alt="Chat Bubble"
        height={540}
        width={1540}
      />
      <a
        onClick={signIn}
        className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">
        Login
      </a>
    </div>
  );
};

export default Login;