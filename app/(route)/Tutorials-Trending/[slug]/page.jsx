"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import TutorialDetails from '../_component/TutorialDetails'
import CommentSection from '@/app/_componenents/CommentSection/CommentSection '

const page = () => {

    const {slug} = useParams()
  return (
    <div>
    <TutorialDetails slug={slug}/>
    <CommentSection slug={slug}/>

    </div>
  )
}

export default page