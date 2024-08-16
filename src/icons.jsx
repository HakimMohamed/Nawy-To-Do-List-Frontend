// src/icons.jsx
import {
  FaRegCalendar,
  FaRegCheckCircle,
  FaRegHeart,
  FaBeer,
  FaApple,
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaArrowAltCircleUp,
  FaAtom,
  FaBalanceScale,
  FaBicycle,
  FaBitcoin,
  FaBook,
  FaBolt,
  FaBone,
  FaBox,
  FaBriefcase,
  FaBullhorn,
  FaCamera,
  FaCar,
  FaChartBar,
  FaChartLine,
  FaCheckSquare,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaCloud,
  FaCloudMoon,
  FaCloudSun,
  FaCode,
  FaCogs,
  FaComments,
  FaCookie,
  FaCreditCard,
  FaDesktop,
  FaDog,
  FaDumbbell,
  FaEdit,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileAlt,
  FaFlag,
  FaFrown,
  FaGamepad,
  FaGuitar,
  FaHamburger,
  FaHandPaper,
  FaHandshake,
  FaHeadphones,
  FaHome,
  FaHospital,
  FaImage,
  FaInfoCircle,
  FaKeyboard,
  FaLeaf,
  FaLightbulb,
  FaLock,
  FaMap,
  FaMobileAlt,
  FaMoon,
  FaMusic,
  FaPalette,
  FaPaperclip,
  FaPaw,
  FaPhone,
  FaPencilAlt,
  FaPlane,
  FaPlayCircle,
  FaPlug,
  FaPlus,
  FaPowerOff,
  FaPrint,
  FaProjectDiagram,
  FaPuzzlePiece,
  FaRedo,
  FaRocket,
  FaSave,
  FaSearch,
  FaSeedling,
  FaServer,
  FaShoppingCart,
  FaSmile,
  FaSnowflake,
  FaStar,
  FaStarHalf,
  FaSun,
  FaSync,
  FaTachometerAlt,
  FaTag,
  FaThumbsUp,
  FaTimes,
  FaTint,
  FaTrashAlt,
  FaTrophy,
  FaUmbrella,
  FaUser,
  FaVolumeUp,
  FaWallet,
  FaWrench,
} from "react-icons/fa";
import {
  MdList,
  MdHome,
  MdWork,
  MdAccessibility,
  MdAcUnit,
  MdAddShoppingCart,
  MdAirplanemodeActive,
  MdAttachMoney,
  MdBeenhere,
  MdBook,
  MdBrush,
  MdBugReport,
  MdBuild,
  MdCake,
  MdCameraAlt,
  MdCardTravel,
  MdCloudDone,
  MdDelete,
  MdDirectionsBike,
  MdEdit,
  MdFavorite,
  MdGroup,
  MdHelp,
  MdInsertChart,
  MdLanguage,
  MdLocationOn,
  MdLock,
  MdLoyalty,
  MdMail,
  MdMap,
  MdMonitor,
  MdMood,
  MdNavigateBefore,
  MdNavigateNext,
  MdNotifications,
  MdPeople,
  MdPerson,
  MdPhotoCamera,
  MdPieChart,
  MdPlace,
  MdPower,
  MdReorder,
  MdSchool,
  MdSearch,
  MdSettings,
  MdStar,
  MdThumbUp,
  MdTrain,
  MdTravelExplore,
  MdWarning,
  MdWifi,
  MdWorkOutline,
} from "react-icons/md";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineSmile,
  AiOutlineMail,
  AiOutlineBell,
  AiOutlineCamera,
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineAppstore,
  AiOutlineCalendar,
  AiOutlinePieChart,
  AiOutlineBarChart,
  AiOutlineShop,
  AiOutlineSearch,
  AiOutlineCreditCard,
  AiOutlineFileText,
  AiOutlineProfile,
  AiOutlineLock,
  AiOutlineHistory,
} from "react-icons/ai";

// Create an array of icon options
const icons = [
  { icon: <FaRegCalendar size={20} />, label: "Calendar" },
  { icon: <FaRegCheckCircle size={20} />, label: "Check" },
  { icon: <FaRegHeart size={20} />, label: "Heart" },
  { icon: <FaBeer size={20} />, label: "Beer" },
  { icon: <FaApple size={20} />, label: "Apple" },
  { icon: <FaArrowAltCircleDown size={20} />, label: "Arrow Down" },
  { icon: <FaArrowAltCircleLeft size={20} />, label: "Arrow Left" },
  { icon: <FaArrowAltCircleRight size={20} />, label: "Arrow Right" },
  { icon: <FaArrowAltCircleUp size={20} />, label: "Arrow Up" },
  { icon: <FaAtom size={20} />, label: "Atom" },
  { icon: <FaBalanceScale size={20} />, label: "Balance Scale" },
  { icon: <FaBicycle size={20} />, label: "Bicycle" },
  { icon: <FaBitcoin size={20} />, label: "Bitcoin" },
  { icon: <FaBook size={20} />, label: "Book" },
  { icon: <FaBolt size={20} />, label: "Bolt" },
  { icon: <FaBone size={20} />, label: "Bone" },
  { icon: <FaBox size={20} />, label: "Box" },
  { icon: <FaBriefcase size={20} />, label: "Briefcase" },
  { icon: <FaBullhorn size={20} />, label: "Bullhorn" },
  { icon: <FaCamera size={20} />, label: "Camera" },
  { icon: <FaCar size={20} />, label: "Car" },
  { icon: <FaChartBar size={20} />, label: "Chart Bar" },
  { icon: <FaChartLine size={20} />, label: "Chart Line" },
  { icon: <FaCheckSquare size={20} />, label: "Check Square" },
  { icon: <FaChevronDown size={20} />, label: "Chevron Down" },
  { icon: <FaChevronLeft size={20} />, label: "Chevron Left" },
  { icon: <FaChevronRight size={20} />, label: "Chevron Right" },
  { icon: <FaChevronUp size={20} />, label: "Chevron Up" },
  { icon: <FaCloud size={20} />, label: "Cloud" },
  { icon: <FaCloudMoon size={20} />, label: "Cloud Moon" },
  { icon: <FaCloudSun size={20} />, label: "Cloud Sun" },
  { icon: <FaCode size={20} />, label: "Code" },
  { icon: <FaCogs size={20} />, label: "Cogs" },
  { icon: <FaComments size={20} />, label: "Comments" },
  { icon: <FaCookie size={20} />, label: "Cookie" },
  { icon: <FaCreditCard size={20} />, label: "Credit Card" },
  { icon: <FaDesktop size={20} />, label: "Desktop" },
  { icon: <FaDog size={20} />, label: "Dog" },
  { icon: <FaDumbbell size={20} />, label: "Dumbbell" },
  { icon: <FaEdit size={20} />, label: "Edit" },
  { icon: <FaEnvelope size={20} />, label: "Envelope" },
  { icon: <FaExternalLinkAlt size={20} />, label: "External Link" },
  { icon: <FaFileAlt size={20} />, label: "File" },
  { icon: <FaFlag size={20} />, label: "Flag" },
  { icon: <FaFrown size={20} />, label: "Frown" },
  { icon: <FaGamepad size={20} />, label: "Gamepad" },
  { icon: <FaGuitar size={20} />, label: "Guitar" },
  { icon: <FaHamburger size={20} />, label: "Hamburger" },
  { icon: <FaHandPaper size={20} />, label: "Hand Paper" },
  { icon: <FaHandshake size={20} />, label: "Handshake" },
  { icon: <FaHeadphones size={20} />, label: "Headphones" },
  { icon: <FaHome size={20} />, label: "Home" },
  { icon: <FaHospital size={20} />, label: "Hospital" },
  { icon: <FaImage size={20} />, label: "Image" },
  { icon: <FaInfoCircle size={20} />, label: "Info" },
  { icon: <FaKeyboard size={20} />, label: "Keyboard" },
  { icon: <FaLeaf size={20} />, label: "Leaf" },
  { icon: <FaLightbulb size={20} />, label: "Lightbulb" },
  { icon: <FaLock size={20} />, label: "Lock" },
  { icon: <FaMap size={20} />, label: "Map" },
  { icon: <FaMobileAlt size={20} />, label: "Mobile" },
  { icon: <FaMoon size={20} />, label: "Moon" },
  { icon: <FaMusic size={20} />, label: "Music" },
  { icon: <FaPalette size={20} />, label: "Palette" },
  { icon: <FaPaperclip size={20} />, label: "Paperclip" },
  { icon: <FaPaw size={20} />, label: "Paw" },
  { icon: <FaPhone size={20} />, label: "Phone" },
  { icon: <FaPencilAlt size={20} />, label: "Pencil" },
  { icon: <FaPlane size={20} />, label: "Plane" },
  { icon: <FaPlayCircle size={20} />, label: "Play Circle" },
  { icon: <FaPlug size={20} />, label: "Plug" },
  { icon: <FaPlus size={20} />, label: "Plus" },
  { icon: <FaPowerOff size={20} />, label: "Power Off" },
  { icon: <FaPrint size={20} />, label: "Print" },
  { icon: <FaProjectDiagram size={20} />, label: "Project Diagram" },
  { icon: <FaPuzzlePiece size={20} />, label: "Puzzle Piece" },
  { icon: <FaRedo size={20} />, label: "Redo" },
  { icon: <FaRocket size={20} />, label: "Rocket" },
  { icon: <FaSave size={20} />, label: "Save" },
  { icon: <FaSearch size={20} />, label: "Search" },
  { icon: <FaSeedling size={20} />, label: "Seedling" },
  { icon: <FaServer size={20} />, label: "Server" },
  { icon: <FaShoppingCart size={20} />, label: "Shopping Cart" },
  { icon: <FaSmile size={20} />, label: "Smile" },
  { icon: <FaSnowflake size={20} />, label: "Snowflake" },
  { icon: <FaStar size={20} />, label: "Star" },
  { icon: <FaStarHalf size={20} />, label: "Star Half" },
  { icon: <FaSun size={20} />, label: "Sun" },
  { icon: <FaSync size={20} />, label: "Sync" },
  { icon: <FaTachometerAlt size={20} />, label: "Tachometer" },
  { icon: <FaTag size={20} />, label: "Tag" },
  { icon: <FaThumbsUp size={20} />, label: "Thumbs Up" },
  { icon: <FaTimes size={20} />, label: "Times" },
  { icon: <FaTint size={20} />, label: "Tint" },
  { icon: <FaTrashAlt size={20} />, label: "Trash" },
  { icon: <FaTrophy size={20} />, label: "Trophy" },
  { icon: <FaUmbrella size={20} />, label: "Umbrella" },
  { icon: <FaUser size={20} />, label: "User" },
  { icon: <FaVolumeUp size={20} />, label: "Volume Up" },
  { icon: <FaWallet size={20} />, label: "Wallet" },
  { icon: <FaWrench size={20} />, label: "Wrench" },
  { icon: <MdList size={20} />, label: "List" },
  { icon: <MdHome size={20} />, label: "Home" },
  { icon: <MdWork size={20} />, label: "Work" },
  { icon: <MdAccessibility size={20} />, label: "Accessibility" },
  { icon: <MdAcUnit size={20} />, label: "Ac Unit" },
  { icon: <MdAddShoppingCart size={20} />, label: "Add Shopping Cart" },
  { icon: <MdAirplanemodeActive size={20} />, label: "Airplane Mode" },
  { icon: <MdAttachMoney size={20} />, label: "Attach Money" },
  { icon: <MdBeenhere size={20} />, label: "Been Here" },
  { icon: <MdBook size={20} />, label: "Book" },
  { icon: <MdBrush size={20} />, label: "Brush" },
  { icon: <MdBugReport size={20} />, label: "Bug Report" },
  { icon: <MdBuild size={20} />, label: "Build" },
  { icon: <MdCake size={20} />, label: "Cake" },
  { icon: <MdCameraAlt size={20} />, label: "Camera" },
  { icon: <MdCardTravel size={20} />, label: "Card Travel" },
  { icon: <MdCloudDone size={20} />, label: "Cloud Done" },
  { icon: <MdDelete size={20} />, label: "Delete" },
  { icon: <MdDirectionsBike size={20} />, label: "Directions Bike" },
  { icon: <MdEdit size={20} />, label: "Edit" },
  { icon: <MdFavorite size={20} />, label: "Favorite" },
  { icon: <MdGroup size={20} />, label: "Group" },
  { icon: <MdHelp size={20} />, label: "Help" },
  { icon: <MdInsertChart size={20} />, label: "Insert Chart" },
  { icon: <MdLanguage size={20} />, label: "Language" },
  { icon: <MdLocationOn size={20} />, label: "Location On" },
  { icon: <MdLock size={20} />, label: "Lock" },
  { icon: <MdLoyalty size={20} />, label: "Loyalty" },
  { icon: <MdMail size={20} />, label: "Mail" },
  { icon: <MdMap size={20} />, label: "Map" },
  { icon: <MdMonitor size={20} />, label: "Monitor" },
  { icon: <MdMood size={20} />, label: "Mood" },
  { icon: <MdNavigateBefore size={20} />, label: "Navigate Before" },
  { icon: <MdNavigateNext size={20} />, label: "Navigate Next" },
  { icon: <MdNotifications size={20} />, label: "Notifications" },
  { icon: <MdPeople size={20} />, label: "People" },
  { icon: <MdPerson size={20} />, label: "Person" },
  { icon: <MdPhotoCamera size={20} />, label: "Photo Camera" },
  { icon: <MdPieChart size={20} />, label: "Pie Chart" },
  { icon: <MdPlace size={20} />, label: "Place" },
  { icon: <MdPower size={20} />, label: "Power" },
  { icon: <MdReorder size={20} />, label: "Reorder" },
  { icon: <MdSchool size={20} />, label: "School" },
  { icon: <MdSearch size={20} />, label: "Search" },
  { icon: <MdSettings size={20} />, label: "Settings" },
  { icon: <MdStar size={20} />, label: "Star" },
  { icon: <MdThumbUp size={20} />, label: "Thumb Up" },
  { icon: <MdTrain size={20} />, label: "Train" },
  { icon: <MdTravelExplore size={20} />, label: "Travel Explore" },
  { icon: <MdWarning size={20} />, label: "Warning" },
  { icon: <MdWifi size={20} />, label: "Wifi" },
  { icon: <MdWorkOutline size={20} />, label: "Work Outline" },
  { icon: <AiOutlineUser size={20} />, label: "User" },
  { icon: <AiOutlineSetting size={20} />, label: "Setting" },
  { icon: <AiOutlineSmile size={20} />, label: "Smile" },
  { icon: <AiOutlineMail size={20} />, label: "Mail" },
  { icon: <AiOutlineBell size={20} />, label: "Bell" },
  { icon: <AiOutlineCamera size={20} />, label: "Camera" },
  { icon: <AiOutlineHome size={20} />, label: "Home" },
  { icon: <AiOutlineHeart size={20} />, label: "Heart" },
  { icon: <AiOutlineStar size={20} />, label: "Star" },
  { icon: <AiOutlineAppstore size={20} />, label: "Appstore" },
  { icon: <AiOutlineCalendar size={20} />, label: "Calendar" },
  { icon: <AiOutlinePieChart size={20} />, label: "Pie Chart" },
  { icon: <AiOutlineBarChart size={20} />, label: "Bar Chart" },
  { icon: <AiOutlineShop size={20} />, label: "Shop" },
  { icon: <AiOutlineSearch size={20} />, label: "Search" },
  { icon: <AiOutlineCreditCard size={20} />, label: "Credit Card" },
  { icon: <AiOutlineFileText size={20} />, label: "File Text" },
  { icon: <AiOutlineProfile size={20} />, label: "Profile" },
  { icon: <AiOutlineLock size={20} />, label: "Lock" },
  { icon: <AiOutlineHistory size={20} />, label: "History" },
];

export default icons;
