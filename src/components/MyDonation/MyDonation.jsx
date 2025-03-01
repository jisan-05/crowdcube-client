import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyDonation = () => {
    const { user } = useContext(authContext);
    const [donate, setDonate] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/campaignsDonate/${user.email}`)
            .then((res) => res.json())
            .then((data) => setDonate(data));
    }, [user]);
    console.log(donate);

    return (
        <div>
            <h3 className="text-center text-2xl">My Donation</h3>
            {donate && (
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Which Campaign You Donate</th>
                                <th>Donate Type</th>
                                <th>Donate Amount</th>
                                <th>Your Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {donate.map((don,idx) => (
                                <tr key={idx}>
                                    <th>{idx+1}</th>
                                    <td>{don.campaignTitle}</td>
                                    <td>{don.campaignType}</td>
                                    <td>{don.amount}</td>
                                    <td>{don.donateEmail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyDonation;
