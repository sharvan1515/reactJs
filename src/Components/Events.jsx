import React from 'react'

function Events() {

    // function checkData() {
    //     console.log('Hello This is Test');
    // }

    // let checkData = () => {
    //     console.log('This is Tes');
    // }

    // const checkData = (testData) => {
    //     console.log(testData)
    // }

    const checkData = (x,y,z) => {
        console.log(z)
        console.log(y.type);
        console.log(y)
    }
  return (
    <div>
        {/* <button
        type='button'
        onClick={checkData}
        >Test</button> */}

        {/* <button
        type='button'
        onClick={() => checkData('This is Test Data')}
        >
            Test
        </button> */}

        <button
        type='button'
        onClick={(event) => checkData('Test Data', event, "Third")}
        >Events Button</button>
    </div>
  )
}

export default Events