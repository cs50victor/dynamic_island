"use client"

import {tw} from "~/utils/tw"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPause,
  faForward,
  faCompactDisc
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";


export const DynamicIsland = ({isOpen}: {isOpen:boolean}) => {

  const variants = {
    open: {
      width: "300px",
      height: "auto",
      borderRadius: "20px"
    },
    closed: {
      width: "96px",
      height: "200px",
      borderRadius: "99px"
    }
  };

  const iconVariants = {
    open: {
      width: "48px",
      height: "48px",
      borderRadius: "12px"
    },
    closed: {
      width: "12px",
      height: "12px",
      borderRadius: "4px"
    }
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className={tw("grid rounded-[99px] bg-black text-white w-[96px] w-fit",
          isOpen ? "align-center p-[24px] [grid-template-columns:_75px_36px_40px]" : "align-start p-[8px_16px]"
      )}
    >
      <motion.div className={tw("grid w-full justify-center gap-[16px]",
        isOpen ? "align-start [grid-template-columns:_48px_1fr_12px]" : "align-center [grid-template-columns:_12px_1fr_12px]"
      )}>
        <motion.img
          className="w-[12px] h-[12px] rounded object-cover"
          animate={isOpen ? "open" : "closed"}
          variants={iconVariants}
          src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid gap-4 align-center justify-center [grid-template-columns:_1fr] [grid-template-rows:_repeat(2,_1fr)]"
            >
              <div className="font-semibold text-white font-size">
                Song Name
              </div>
              <div className="font-light text-white tracking-tight">
                Artist Name
              </div>
            </motion.div>
          )}
        </div>
        <motion.div
            animate={{ opacity: isOpen ? [0, 1] : 1 }}
            className="w-[12px] h-[12px] grid justify-center align-center gap-3 [grid-template-columns:repeat(3,1fr)]"
        >
          <motion.div
            className="w-full h-full rounded bg-[linear-gradient(0deg,rgba(255,_0,_255,_1)_0%,rgba(255,_0,_255,_0.75)_100%)]"
            initial={{ height: "0" }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
          />
          <motion.div
            className="w-full h-full rounded bg-[linear-gradient(0deg,rgba(255,_0,_255,_1)_0%,rgba(255,_0,_255,_0.75)_100%)]"
            initial={{ height: "0" }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.75, repeat: Infinity }}
          />
          <motion.div
            className="w-full h-full rounded bg-[linear-gradient(0deg,rgba(255,_0,_255,_1)_0%,rgba(255,_0,_255,_0.75)_100%)]"
            initial={{ height: "0" }}
            animate={{ height: "75%" }}
            transition={{ duration: 1, delay: 0.3, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      {isOpen && (
        <>
          {/* <StyledPlayBarWrapper>
            <span>2:30</span>
            <StyledPlayBar />
            <span>-1:35</span>
          </StyledPlayBarWrapper> */}
          <div>
            <div />
            <div className="grid gap-[32px] align-center justify-center w-full text-white [grid-template-columns:_32px_auto_32px]">
                <FontAwesomeIcon size="2x" icon={faBackward} />
                <FontAwesomeIcon size="3x" icon={faPause} />
                <FontAwesomeIcon size="2x" icon={faForward} />
            </div>
            <div>
              <FontAwesomeIcon size="2x" icon={faCompactDisc} />
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

DynamicIsland.displayName = "DynamicIsland";
