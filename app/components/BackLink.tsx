import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

function BackLink({ link, page }: { link: string; page: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
    >
      <div className="text-center mt-5">
        <Link href={link}>
          <Button
            variant="primary"
            className="back-button px-4 py-2"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              border: "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.span
              className="d-flex align-items-center justify-content-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaArrowLeft className="me-2" />
              Back to {page}
            </motion.span>
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default BackLink;
