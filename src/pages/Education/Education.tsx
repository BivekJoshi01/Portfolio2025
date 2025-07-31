import React from 'react';
import TextType from '../../components/TypeText';
import StarBorder from '../../components/StarBoarder';

const Education: React.FC = () => {
  return (
    <div className='p-33 flex flex-col'>
      <TextType
        text={["Text typing effect", "for your websites", "Happy coding!"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
      />
      <StarBorder
        as="button"
        className="custom-class"
        color="cyan"
        speed="3s"
      >sxasxasx
      </StarBorder>
    </div>
  );
};

export default Education;
