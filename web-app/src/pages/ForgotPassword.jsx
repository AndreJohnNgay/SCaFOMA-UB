import React from 'react';

function ForgotPassword() {
    return (
        <div className="min-h-screen bg-gray-600 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div className="bg-gray-300 shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <h1 className="font-bold text-center text-2xl mb-5 text-red-800">Forgot Password</h1>
                        <p className="text-center mb-4 text-gray-700">
                            Enter your email address to reset your password.
                        </p>
                        <form>
                            <label className="font-semibold text-sm pb-1 block text-gray-700">E-mail</label>
                            <input
                                type="email"
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                placeholder="Enter your email"/>

                            <button
                                type="submit"
                                className="transition duration-200 bg-red-800 hover:bg-red-600 focus:bg-red-700 focus:shadow-sm focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span className="inline-block mr-2 text-white">Reset Password</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
