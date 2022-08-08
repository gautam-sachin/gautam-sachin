import React from 'react';
import Quiz from './Quiz';

export default function QuestionData() {
  const data = [
    {
      id: 1,
      question: ' Who is the father of Computers?',
      ansOption: [
        { option: '1James Gosling' },
        { option: '2Charles Babbage' },
        { option: '3Dennis Ritchie' },
        { option: '4Bjarne Stroustrup' },
      ],
      answer: 'Charles Babbage',
    },
    {
      id: 2,
      question: 'What is the full form of CPU?',
      ansOption: [
        { option: 'Computer Processing Unit' },
        { option: 'Computer Principle Unit' },
        { option: 'Central Processing Unit' },
        { option: 'Control Processing Unit' },
      ],
      answer: 'Central Processing Unit',
    },
    {
      id: 3,
      question: 'Which of the following computer language is written in binary codes only?',
      ansOption: [
        { option: ' pascal' },
        { option: 'machine language' },
        { option: 'C' },
        { option: 'C#' },
      ],
      answer: 'machine language',
    },
    {
      id: 4,
      question: ' Which of the following is the smallest unit of data in a computer?',
      ansOption: [
        { option: 'Bit' },
        { option: 'KB' },
        { option: 'Nibble' },
        { option: 'Byte' },
      ],
      answer: 'Bit',
    },
    {
      id: 5,
      question: '. Which of the following is the brain of the computer?',
      ansOption: [
        { option: 'Central Processing Unit' },
        { option: ' Memory' },
        { option: 'Arithmetic and Logic unit' },
        { option: 'Control unit' },
      ],
      answer: 'Central Processing Unit',
    },
    {
      id: 6,
      question: 'Which of the following is not a characteristic of a computer?',
      ansOption: [
        { option: 'Versatility' },
        { option: 'Accuracy' },
        { option: 'Diligence' },
        { option: 'I.Q.' },
      ],
      answer: 'I.Q.',
    },
  ];
  return (
    <div>
      <Quiz data={data} />
    </div>
  );
}
