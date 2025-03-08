import React from "react";

export default function Home({ darkMode }) {
  return (
    <div
      className={`container-fluid min-vh-100 d-flex flex-column ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container pt-5 mt-5">
        <h2 className="text-center">About AST</h2>
        <p style={{ textAlign: "justify" }}>
          "Discover a world like no other through a one-of-a-kind, interactive
          journey that brings together people from all walks of life. At AST, we
          create an environment where adventure and curiosity meet, allowing
          every individual to explore unique experiences designed to spark
          wonder and excitement. Our mission is to ignite joy and laughter in
          every person we encounter, creating bonds that transcend boundaries.
          Whether it's through an immersive experience, a surprise event, or a
          shared moment of pure happiness, we aim to make everyone feel like
          they're part of something extraordinary.
          <br />
          <br />
          We strive to create unforgettable moments that people from all corners
          of the globe can share and enjoy together. Our experiences are crafted
          with the belief that true connections are made when individuals feel a
          sense of belonging. At AST, we want everyone to walk away with a story
          to tell—one that sparks laughter, warmth, and a sense of community. By
          offering experiences that captivate, entertain, and bring people
          closer, we help foster a world where unity and joy are celebrated, no
          matter where you're from. Our goal is not just to entertain, but to
          leave a lasting, positive impact on your life.
          <br />
          <br />
          AST’s vision is to create a space where every experience, big or
          small, leaves you with cherished memories and a smile on your face. We
          believe that experiences have the power to change lives, and our
          commitment is to continue providing moments that are meaningful and
          transformative. Join us on this incredible journey and be a part of a
          community that thrives on happiness, shared adventures, and making the
          world a brighter place—one unforgettable moment at a time. Together,
          let's create memories that will last a lifetime.
          <br />
          <br />
          <strong>Our Mission:</strong>
          <br />
          At AST, our mission is to curate immersive and interactive experiences
          that bring people closer together, inspire joy, and foster meaningful
          connections. We are dedicated to providing a safe, inclusive, and
          enriching environment where people can explore their curiosity and
          step into new adventures. We aim to leave a positive impact on the
          communities we serve by offering experiences that entertain, educate,
          and inspire change.
          <br />
          <br />
          <strong>Our Vision:</strong>
          <br />
          Our vision is to build a global community united by the spirit of
          adventure, joy, and discovery. We aim to be a catalyst for positive
          change, encouraging individuals to embrace new experiences, broaden
          their perspectives, and create lasting memories. Through innovative
          storytelling, exciting experiences, and heartfelt connections, we want
          to shape a world where happiness and shared moments of joy are the
          foundation of meaningful relationships and vibrant communities.
          <br />
          <br />
          Together, we believe that every moment can be extraordinary, and we
          are committed to turning ordinary experiences into extraordinary
          memories for people around the world. As we continue to grow, our
          vision remains clear: to bring people together, create unforgettable
          memories, and leave a positive, lasting imprint on the world."
        </p>
      </div>
    </div>
  );
}
