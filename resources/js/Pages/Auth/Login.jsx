import GuestLayout from "@/Layout/GuestLayout";
import TextInput from "@/Components/TextInput";
import SubmitButton from "@/Components/SubmitButton";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

const Login = () => {

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const [isShow, setIsShow] = useState(true);

    const togglePassword = () => { setIsShow(!isShow) };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/*  Email */}
            <TextInput
                label="Email"
                name="Email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                icon="fas fa-envelope"
                type="email"
                id="email"
                placeholder="Enter Your Email"
            />

            {/*  Password */}
            <TextInput
                label="Password"
                name="Password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                icon="fas fa-lock"
                isPassword={true}
                type={isShow ? "password" : "text"}
                id="password"
                isShow={isShow}
                togglePassword={togglePassword}
                placeholder="Enter Your Password"
            />

            {/*  Login Button */}
            <SubmitButton
                icon="fas fa-arrow-right"
                loading={processing}
            >
                Login
            </SubmitButton>

            {/*  Remember & Forgot */}
            {/* <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-1.5 text-stone-600 cursor-pointer">
                        <input type="checkbox" className="w-3.5 h-3.5 rounded border-stone-300 text-amber-700 focus:ring-amber-700"/>
                        <span className="text-xs">Ingat saya</span>
                    </label>
                    <a href="#" className="text-amber-800 hover:text-amber-600 text-xs font-medium transition-colors">Lupa password?</a>
                </div> */}
        </form>
    );
};

Login.layout = (page) => <GuestLayout children={page} />;

export default Login;
