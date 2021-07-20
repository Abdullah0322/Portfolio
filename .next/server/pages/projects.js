module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/qkN":
/***/ (function(module, exports) {

module.exports = require("react-grid-carousel");

/***/ }),

/***/ "2kuQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/qkN");
/* harmony import */ var react_grid_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("IyKs");
/* harmony import */ var _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_images_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("J42B");
/* harmony import */ var react_images_viewer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_images_viewer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__);










const projects = [{
  name: "Click and Pick",
  category: "Mobile App",
  description: "Click and Pick is a mobile application for Android and IoS. The objective of CLick and Pick is to establish a platform where consumers can purchase/ view off the shelf items in the comfort of their homes. The application has multiple vendors where the sellers can display their products, this has the advantage of the user being able to view the items of the seller. This is especially helpful during this pandemic where a curfew has been established. The buyers can order from multiple stores within their region and collect them from a collection point near them, for ease of use and without having to go to each individual store.",
  pictures: [{
    src: "/projects/click1.jpeg"
  }, {
    src: "/projects/click2.jpeg"
  }, {
    src: "/projects/click3.jpeg"
  }, {
    src: "/projects/click4.jpeg"
  }, {
    src: "/projects/click5.jpeg"
  }, {
    src: "/projects/click6.jpeg"
  }, {
    src: "/projects/click7.jpeg"
  }, {
    src: "/projects/click8.jpeg"
  }, {
    src: "/projects/click9.jpeg"
  }],
  download_link: "https://drive.google.com/file/d/15KR2n801bpRLgNqfuSlwfauc0UjyNMow/view?usp=sharing",
  github_repo: "https://github.com/Abdullah0322/fyp_final",
  stack: ["FLutter", "Dart", "Firebase", "Git"]
}, {
  name: "Ecommerce Store",
  category: "Website",
  description: "It is an Ecommerce Website where buyers can purcahse and admin can see the orders.",
  pictures: [{
    src: "/projects/shop.png"
  }],
  live_link: "crae-example43.herokuapp.com",
  github_repo: "https://github.com/Abdullah0322/myshop",
  stack: ["React JS", "NODE JS", "JavaScript", "MONGO DB", "MONGOOSE", "Git", "CSS"]
}, {
  name: "Ticket Updater",
  category: "Web App",
  description: "Company Based Web App where QA's can update developers about mistakes in the Applications.",
  pictures: [{
    src: "/projects/ticket.png"
  }],
  live_link: "https://ticketupdater.herokuapp.com/",
  github_repo: "https://github.com/Abdullah0322/TicketUpdated",
  stack: ["REACT JS", "NODE JS", "JavaScript", "MONGO DB", "MONGOOSE", "Git"]
}];

const ProjectsPage = () => {
  const {
    0: currentImage,
    1: setCurrentImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: isOpen,
    1: setisOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_grid_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
      cols: 1,
      rows: 1,
      gap: 1,
      showDots: true,
      mobileBreakpoint: 670,
      containerClassName: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.carousel,
      arrowRight: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowRight"],
        className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
        onClick: () => {
          setCurrentIndex(currentIndex + 1);
        }
      }),
      arrowLeft: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowLeft"],
        className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
        onClick: () => {
          setCurrentIndex(currentIndex - 1);
        }
      }),
      children: projects.map((item, key) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_grid_carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardHead,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
                children: "Name:"
              }), " ", item.name]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
                children: "Category:"
              }), " ", item.category]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("summary", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
                className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
                children: "Description:"
              }), " ", item.description]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
              children: "Technology Stack:"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
              className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.stackContainer,
              children: item.stack.map(item => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
                children: item
              }))
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.urls,
              children: [item.live_link && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                  href: item.live_link,
                  target: "blank",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLink"]
                  }), " Preview"]
                })
              }), item.download_link && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                  href: item.download_link,
                  target: "blank",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGooglePlay"]
                  }), " Download App"]
                })
              }), item.github_repo && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
                  href: item.github_repo,
                  target: "blank",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGithub"]
                  }), " Github"]
                })
              })]
            }), item.creds && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.label,
                children: item.creds.desc
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("strong", {
                  children: ["Username: ", item.creds.username]
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("strong", {
                  children: ["Username: ", item.creds.password]
                })
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardImageContainer,
            children: item.pictures.map((item, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: item.src,
              className: _styles_ProjectPage_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardImage,
              onClick: () => {
                setCurrentImage(index);
                setisOpen(true);
              }
            }))
          })]
        })
      }, key))
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_images_viewer__WEBPACK_IMPORTED_MODULE_6___default.a, {
      imgs: projects[currentIndex].pictures,
      currImg: currentImage,
      isOpen: isOpen,
      onClickPrev: () => setCurrentImage(currentImage - 1),
      onClickNext: () => setCurrentImage(currentImage + 1),
      onClose: () => {
        setCurrentImage(0);
        setisOpen(false);
      }
    })]
  });
};

async function getStaticProps() {
  return {
    props: {
      title: "Projects"
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (ProjectsPage);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2kuQ");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IyKs":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "ProjectPage_container__1ia9D",
	"carousel": "ProjectPage_carousel__3KtC-",
	"cardHead": "ProjectPage_cardHead__2WaKN",
	"label": "ProjectPage_label__Azl2W",
	"stackContainer": "ProjectPage_stackContainer__sZBPt",
	"cardImageContainer": "ProjectPage_cardImageContainer__3vi7g",
	"cardImage": "ProjectPage_cardImage__35hXW",
	"card": "ProjectPage_card__yORQg",
	"urls": "ProjectPage_urls__2Q4O8",
	"icon": "ProjectPage_icon__2HUpw"
};


/***/ }),

/***/ "J42B":
/***/ (function(module, exports) {

module.exports = require("react-images-viewer");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ })

/******/ });