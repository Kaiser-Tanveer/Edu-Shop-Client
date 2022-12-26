const BookingModal = ({ goods, setQuantity, myAmount }) => {
    const { name: productName, img } = goods;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const bookedProduct = [
            {
                productName,
                myAmount,
                img,
            }
        ]
        console.log(bookedProduct);
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
                            <div className="modal-action">
                                <input htmlFor="cart-modal" type="submit" value='Add to Cart' className="btn btn-secondary rounded-md w-full" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;