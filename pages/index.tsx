import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ActivityCard from '../components/ActivityCard';
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <div className=" grid gap-5 p-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/**/}<ProfileCard />
      <ActivityCard 
        card_icon="work" 
        card_color="light-orange"
        card_curr_hours={32}
        card_prev_hours={36} />
      <ActivityCard 
        card_icon="play" 
        card_color="soft-blue"
        card_curr_hours={10}
        card_prev_hours={8}/>
      <ActivityCard 
        card_icon="study"
        card_color="light-red"
        card_curr_hours={4}
        card_prev_hours={7}/>
      <ActivityCard 
        card_icon="exercise"
        card_color="lime-green"
        card_curr_hours={4}
        card_prev_hours={5}/>
      <ActivityCard 
        card_icon="social"
        card_color="violet"
        card_curr_hours={5}
        card_prev_hours={10}/>
      <ActivityCard 
        card_icon="self-care"
        card_color="soft-orange"
        card_curr_hours={2}
        card_prev_hours={2}/>
      
    </div>
  )
}

export default Home;