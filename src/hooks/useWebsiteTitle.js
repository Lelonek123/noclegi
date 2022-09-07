import React from 'react';

export default function useWebsiteTitle(title) {
    React.useEffect(() => {
        document.title = title;
    }, [title])
}
