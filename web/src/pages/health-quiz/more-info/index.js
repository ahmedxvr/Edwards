import React from 'react';
import { useLocation } from '@reach/router';
import QuizLayout from '@components/quizLayout';
import InfoPrompt from '@components/forms/infoPromt';
import { useQuizContext } from '@lib/quizContext';
import { motion, AnimatePresence } from 'framer-motion';

const MoreInfo = () => {
  const { quizState } = useQuizContext();

  const { search } = useLocation();

  // remove ? from search string
  const message = search.substring(1);

  const wordingStyle =
    'blockH4 text-center max-w-[1200px] sm:px-5 mx-auto mb-two';

  const wording = (message) => {
    switch (message) {
      case 'messageOne':
        return (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className={wordingStyle}
          >
            {`Waiting lists for echos through the public health system can be
            long. Make sure to discuss wait times with a doctor, and whether
            a private provider may be a better option for ${
              quizState.completingForMyself ? 'you' : 'them'
            }.`}
            <br />
            <br />
            Would you like us to send you more information?
          </motion.h1>
        );
      case 'messageTwo':
        return (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className={wordingStyle}
          >
            {`The only way to know if ${
              quizState.completingForMyself ? 'you' : 'they'
            } have heart valve disease is to have an
            echocardiogram. Ask ${
              quizState.completingForMyself ? 'your' : 'their'
            } doctor how ${
              quizState.completingForMyself ? 'you' : 'they'
            } can get one.`}
            <br />
            <br />
            {`Waiting lists for echos through the public health system can be long. Make sure to
            discuss wait times with ${
              quizState.completingForMyself ? 'your' : 'their'
            } doctor, and whether a private provider
            may be a better option for ${
              quizState.completingForMyself ? 'you' : 'them'
            }.`}
            <br />
            <br />
            Would you like us to send you more information?
          </motion.h1>
        );
      case 'messageThree':
        return (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className={wordingStyle}
          >
            {` The only way to know if ${
              quizState.completingForMyself ? 'you' : 'they'
            } have heart valve disease is to have an
            echocardiogram. You can check with ${
              quizState.completingForMyself ? 'your' : 'their'
            } GP if ${
              quizState.completingForMyself ? 'you' : 'they'
            } have had an
            echocardiogram, or need another one. Ask ${
              quizState.completingForMyself ? 'your' : 'their'
            } doctor how ${
              quizState.completingForMyself ? 'you' : 'they'
            } can get
            one.`}
            <br />
            <br />
            {` Waiting lists for echos through the public health system can be
            long. Make sure to discuss wait times with ${
              quizState.completingForMyself ? 'your' : 'their'
            } doctor, and whether
            a private provider may be a better option for ${
              quizState.completingForMyself ? 'you' : 'them'
            }.`}
            <br />
            <br />
            Would you like us to send you more information?
          </motion.h1>
        );
      case 'messageFour':
        return (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className={wordingStyle}
          >
            {`Heart murmurs are common over the age of 65, make sure to ask ${
              quizState.completingForMyself ? 'your' : 'their'
            }
            GP to listen to ${
              quizState.completingForMyself ? 'your' : 'their'
            } heart with a stethoscope every year.`}
            <br />
            <br />
            Would you like us to send you more information?
          </motion.h1>
        );
      case 'messageFive':
        return (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className={wordingStyle}
          >
            {`Some of these symptoms could indicate a problem with ${
              quizState.completingForMyself ? 'your' : 'their'
            } heart.
            Make an appointment with ${
              quizState.completingForMyself ? 'your' : 'their'
            } GP to discuss ${
              quizState.completingForMyself ? 'your' : 'their'
            } symptoms and ask
            for a heart check, making sure ${
              quizState.completingForMyself ? 'your' : 'their'
            } doctor listens to ${
              quizState.completingForMyself ? 'your' : 'their'
            } heart
            with a stethoscope.`}
            <br />
            <br />
            Would you like us to send you more information?
          </motion.h1>
        );
      case 'messageSix':
        return (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className={wordingStyle}
          >
            Heart murmurs are common over the age of 65.
            <br />
            <br />
            {`Make sure to ask your GP to listen to your heart at ${
              quizState.completingForMyself ? 'your' : 'their'
            } next
            appointment, this is a quick test that can be included in a normal
            consultation.`}
            <br />
            <br />
            Would you like us to send you more information?
          </motion.h1>
        );
      default:
        return (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className={wordingStyle}
          >
            {`Waiting lists for echos through the public health system can be
          long. Make sure to discuss wait times with a doctor, and whether
          a private provider may be a better option for ${
            quizState.completingForMyself ? 'you' : 'them'
          }.`}
            <br />
            <br />
            Would you like us to send you more information?
          </motion.h1>
        );
    }
  };

  return (
    <QuizLayout progress='75%'>
      <div className=''>
        <AnimatePresence mode='wait'>{wording(message)}</AnimatePresence>
        <InfoPrompt />
      </div>
    </QuizLayout>
  );
};

export default MoreInfo;
