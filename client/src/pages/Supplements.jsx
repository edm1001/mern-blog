import React from 'react'
import Header from '../components/Header';

function Supplements() {
  return (
    <>
    <Header />
    <div className="text-center">
      <h1 className="text-2xl">Supplements</h1>
      <p className="mt-2">small paragraph about products we carry</p>
    </div>
    <div>
      {/* all supplements unless a category is clicked */}
      {/* cat. options = muscle building , energy&performance, Post-Workout & Recovery, Weight Management & FatLoss, Immune Support, Mental& Cognitive Boost, Endurance & Stamina, Overall Health & Wellness */}
    </div>
  </>
  )
}

export default Supplements;