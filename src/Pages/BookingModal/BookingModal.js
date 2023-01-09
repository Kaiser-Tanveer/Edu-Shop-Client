import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaExclamationTriangle } from "react-icons/fa";

const BookingModal = ({ goods, setQuantity, myAmount }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { name: productName, img } = goods;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const message = form.msg.value;

        const bookedProduct = {
            mail: user?.email,
            message,
            productName,
            myAmount,
            img,
            phone,
            location,
        }

        fetch('https://edushop-server.vercel.app/myProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    toast.success('Product added Successfully!');
                    navigate('/dashboard');
                }
            })
        setQuantity(0)
    }
    return (
        <>
            < input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-cyan-200">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        <div className="text-center">
                            <p className="text-xl font-semibold">{productName}</p>
                            <img src={img} alt="" className="w-2/3 mx-auto my-2" />
                            <p className="text-orange-500">Total Price: {myAmount}</p>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="number" name='phone' placeholder="+880 1XXXXXXXXX" className="input input-bordered w-full rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Location</span>
                                </label>
                                <input type="text" name='location' placeholder="@ Satkania, Chattogram" className="input italic input-bordered w-full rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea type="text" name='msg' placeholder="Product Looks Good" className="input input-bordered w-full rounded-md" />
                            </div>
                            <div className="modal-action mt-14">
                                {
                                    user ?
                                        <input htmlFor="cart-modal" type="submit" value='Add to Cart' className="btn btn-secondary rounded-md w-full" />
                                        :
                                        <>
                                            <input htmlFor="cart-modal" type="submit" value='Add to Cart' className="btn btn-disabled rounded-md w-full" disabled />
                                            <p className="absolute flex items-center -mt-12 text-xl font-semibold p-2 border-2 rounded-md border-error"><FaExclamationTriangle className="text-yellow-500 mr-2" /> Please, <Link to='/logIn' className="mx-2 link link-hover link-primary">Login</Link> to Add Product</p>
                                        </>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;