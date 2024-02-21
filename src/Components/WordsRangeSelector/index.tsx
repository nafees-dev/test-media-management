import { SliderSx } from './style';

// const marks = [
//   {
//     value: 100,
//     label: '100',
//   },
//   {
//     value: 1000,
//     label: '1000',
//   },
// ];



const WordsRangeSelector = () => {
  return (
    <>
     <SliderSx min={100} max={1000} valueLabelDisplay="auto" /> 
    </>
  )
}

export default WordsRangeSelector
