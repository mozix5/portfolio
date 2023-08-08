import Typewriter from "typewriter-effect";

const AutoTyper = () => {
  return (
    <p>
      <Typewriter
        options={{
          strings: [" Software Engineer", "Web Developer"],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 40,
          typeSpeed: 40,
        }}
      />
    </p>
  );
};

export default AutoTyper;
