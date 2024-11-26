import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";


    const VisibleContext = createContext({
        visible: false,
        scrollWidth: 0,
        handleVisible: () => {},
    });

    export default VisibleContext;

    export const VisibleContextProvider = ({ children }) => {
        const [isVisible, setIsVisible] = useState(false);
        const [screenWidth, setScreenWidth] = useState(window.innerWidth);

        useEffect(() => {
                const handleResize = () => {
                setScreenWidth(window.innerWidth);
                if (window.innerWidth > 800) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
                };

                window.addEventListener("resize", handleResize);

                return () => {
                window.removeEventListener("resize", handleResize);
                };
        }, []);

        useEffect(() => {
            if (window.innerWidth > 800) {
            setIsVisible(true);
            setScreenWidth(window.innerWidth);
            } else {
            setIsVisible(false);
            }
        }, []);

        const handleVisible = (bool) => {
            setIsVisible(bool);
        }

        const value = {
            visible: isVisible,
            screenWidth: screenWidth,
            handleVisible: handleVisible
        }

        return (
            <VisibleContext.Provider value={value}>
                {children}
            </VisibleContext.Provider>
        )

    }

    VisibleContextProvider.propTypes = {
        children: PropTypes.node
    }