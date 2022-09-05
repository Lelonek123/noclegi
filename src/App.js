import React from "react";
import Header from "./components/header/header.js";
import Menu from "./components/menu/menu.js";
import Hotels from "./components/hotels/hotels.js";
import LoadingIcon from "./components/UI/loadingIcon/loadingIcon.js";
import SearchBar from "./components/UI/searchBar/searchBar.js";
import Layout from "./components/layout/layout.js";
import Footer from "./components/footer/footer.js";
import "./App.css";

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

function App() {
    const [hotels, setHotels] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [theme, setTheme] = React.useState("primary");

    const searchHandler = (term) => {
        if (term === "") {
            setHotels(hotelList);
            return;
        }

        setHotels(
            hotelList.filter((hotel) =>
                hotel.name.toLowerCase().includes(term.toLowerCase())
            )
        );
    };

    const changeTheme = () => {
        const newTheme = theme === 'primary' ? 'danger' : 'primary';
        setTheme(newTheme);
    };

    React.useEffect(() => {
        if (loading === true) {
            setTimeout(() => {
                setHotels(hotelList);
                setLoading(false);
            }, 1000);
        }
    });

    return (
        <Layout
            header={
                <Header>
                    <SearchBar onSearch={searchHandler} theme={theme} />
                </Header>
            }
            footer={<Footer />}
            content={
                loading ? (
                    <LoadingIcon />
                ) : (
                    <Hotels hotels={hotels} theme={theme} />
                )
            }
            menu={<Menu theme={theme} changeTheme={changeTheme} />}
        />
    );
}

export default App;
