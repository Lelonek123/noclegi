import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header/header.js";
import Menu from "./components/menu/menu.js";
import Hotels from "./components/hotels/hotels.js";
import LoadingIcon from "./components/UI/loadingIcon/loadingIcon.js";
import SearchBar from "./components/UI/searchBar/searchBar.js";
import Layout from "./components/layout/layout.js";
import Footer from "./components/footer/footer.js";
import LastHotel from "./components/hotels/lastHotel/lastHotel.js";
import useStateStorage from './hooks/useStateStorage.js';
import useWebsiteTitle from './hooks/useWebsiteTitle.js';
import Hotel from './pages/hotel/hotel.js';
import Search from "./components/search/search.js";
import PageNotFound from "./pages/404/404.js"

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

const reducer = (state, action) => {
    const newState = {...state}
    
    switch (action.type) {
        case 'change-theme' : 
            newState.theme = state.theme === 'primary' ? 'danger' : 'primary';
            break;
        case 'change-theme-to-warning' :
            newState.theme = 'warning';
            break;
        case 'set-loading' :
            newState.loading = action.loading;
            break;
        case 'set-hotels' :
            newState.hotels = action.hotels;
            break;
        default :
            throw new Error(`Action is not defined: "${action.type}"`);
    }

    return newState
}

const initialState = {
    theme: '',
    hotels: [],
    loading: true
}

const init = (initState) => {
    initState.theme = 'danger'
    return initState
}

function App() {
    // const [hotels, setHotels] = React.useState([]);
    // const [loading, setLoading] = React.useState(true); 
    // const [theme, setTheme] = React.useState("primary");
    
    const [state, dispatch] = React.useReducer(reducer, initialState, init);
    const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
    useWebsiteTitle('Home');

    const openHotel = (hotel) => {
        setLastHotel(hotel)
    }

    const removeLastHotel = () => {
        setLastHotel(null);
    }


    // const changeTheme = () => {
    //     // const newTheme = theme === 'primary' ? 'danger' : 'primary';
    //     // setTheme(newTheme);

    //     dispatch({ type: "change-theme" });
    //     // dispatch({type: "change-theme-to-warning"})
    // };

    React.useEffect(() => {
            setTimeout(() => {
                dispatch({type: 'set-hotels', hotels: hotelList})
                dispatch({type: 'set-loading', loading: false})
            }, 1000);
    }, []);

    const content = (
        <Routes>
            <Route path="/" element={
                <>
                    {lastHotel ? <LastHotel onRemove={removeLastHotel} {...lastHotel}/> : null}
                    <Hotels onOpen={openHotel} hotels={state.hotels} theme={state.theme} />
                </>
            } />
            <Route path="/search" element={
                <>
                    {lastHotel ? <LastHotel onRemove={removeLastHotel} {...lastHotel}/> : null}
                    <Hotels onOpen={openHotel} hotels={state.hotels} theme={state.theme} />
                </>
            } />
            <Route path="/hotel/:id" element={
                <Hotel />            
            } />
            <Route path="/search/:term" element={
                <Search openHotel={openHotel} theme={state.theme}/>
            } />
            <Route path="*" element={
                <PageNotFound />
            } />
        </Routes>
    )

    return (
        <Router>
            <Layout
                header={
                    <Header>
                        <SearchBar theme={state.theme} />
                    </Header>
                }
                footer={<Footer />}
                content={
                    state.loading ? (
                        <LoadingIcon />
                    ) : content }
                menu={<Menu theme={state.theme} changeTheme={() => dispatch({ type: "change-theme" })} />}
            />
        </Router>
    );
}

export default App;
