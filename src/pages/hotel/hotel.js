import React from 'react';
import {useParams} from 'react-router-dom';
import LoadingIcon from '../../components/UI/loadingIcon/loadingIcon.js';

const hotelList = [
    {
        id: 1,
        name: "Akacja",
        city: "Warszawa",
        reviews: 670,
        rating: 8.3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Morbi tincidunt augue interdum velit.",
        image: "",
    },
    {
        id: 2,
        name: "Dąb",
        city: "Łódź",
        reviews: 223,
        rating: 7,
        description:
            "Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Suspendisse sed nisi lacus sed viverra. Eget mi proin sed libero enim sed. Egestas pretium aenean pharetra magna ac placerat vestibulum. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Consectetur adipiscing elit duis tristique sollicitudin nibh. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Arcu felis bibendum ut tristique et egestas quis ipsum. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Purus in massa tempor nec.",
        image: "",
    },
];

export default function Hotel() {
    const { id } = useParams();
    const [hotel, setHotel] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    const fetchHotel = () => {
        setHotel(hotelList[id - 1])
    }

    React.useEffect(() => {
        setTimeout(() => {
            fetchHotel();
            setLoading(false)
        }, 1000)
    })

    return (
        <>
        { loading ? (
                <LoadingIcon />
            ) : (
                <h1>Hotel: {hotel.name}</h1>
            )
        }
        </>
    )
}
