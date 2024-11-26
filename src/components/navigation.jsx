import { motion, useAnimationControls } from "framer-motion"
import { useState, useEffect } from "react"
import NavigationLink from "./NavigationLink"
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import logo from "../assets/logo.png"
import PropTypes from "prop-types"

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
}

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
}

const Navigation = ({ visible, screenWidth }) => {
  const [isOpen, setIsOpen] = useState(visible)
  const [isVisible, setIsVisible] = useState(visible);

  const containerControls = useAnimationControls()
  const svgControls = useAnimationControls()

  useEffect(() => {
    if (isOpen ) {
      containerControls.start("open")
      svgControls.start("open")      
    } else {
      containerControls.start("close")
      svgControls.start("close")
    }
  }, [isOpen])

  const handleOpenClose = () => {
    setIsVisible(false)
    setIsOpen(!isOpen)
  }

  console.log(isVisible)

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className={`bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600 ${screenWidth < 800 && isVisible === false  ? "hidden" : ""}`}
      >
        <div className="border border-red-300 flex flex-row w-full justify-between place-items-center">
          <img src={logo} alt="logo" className={`h-12 object-cover ${isOpen ? "block" : "hidden"}`} />
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3 transition-all duration-100">
          <NavigationLink name="Dashboard" isOpen={isOpen}>
            <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Projects" isOpen={isOpen}>
            <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Tasks" isOpen={isOpen}>
            <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Reporting" isOpen={isOpen}>
            <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Users" isOpen={isOpen}>
            <UsersIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>
      </motion.nav>
    </>
  )
}

Navigation.propTypes = {
  visible: PropTypes.bool,
  screenWidth: PropTypes.number,
}

export default Navigation
