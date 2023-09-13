import { ModalProps } from "@/types/interfaces"

const Modal = ({ setshow, about, email, name, latestCaseType }: ModalProps) => {
    return (
        <div>
            <div
                id="defaultModal"
                className="relative top-0 left-40 right-0 z-50 w-full p-4 h-max"
            >
                <div className="w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t ">
                            <h3 className="text-xl font-semibold text-gray-900 ">
                                About Lawyer
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                data-modal-hide="defaultModal"
                                onClick={() => setshow(false)}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4">
                            <p className="text-base leading-relaxed text-gray-500 ">
                                <span className="text-lg font-semibold text-black">Name : {name}</span>

                            </p>
                            <p className="text-sm leading-relaxed text-gray-500 ">
                                <span className="text-lg font-semibold text-black">About: </span>
                                {about}
                            </p>
                            <p className="text-sm leading-relaxed text-gray-500 ">
                                <span className="text-lg font-semibold text-black">Latest Case: </span>
                                {latestCaseType}
                            </p>
                            <p className="text-sm leading-relaxed text-gray-500 ">
                                <span className="text-lg font-semibold text-black">Email: </span>
                                {email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
