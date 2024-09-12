import React from 'react'
import Faq from '../../shared/Faq/Faq'
import './servicesFaq.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'

const ServicesFaq = () => {
  return (
    <div className="sectionPadding-sm servicesFaq">
      <InnerContainer size={'medium'}>
        <h2 className="title">Therapy</h2>
        <Faq
          title={'Individual Therapy'}
          content={
            'I support individuals from adolescence through adulthood to explore their inner world and develop a loving and peaceful connection with themselves and others.'
          }
        />
        <Faq
          title={'Couple Therapy'}
          content={
            'Whether you’re a couple who is just starting out on your journey together or are trying to find your way back to a time when you felt more connected, I can help you understand yourselves and your relationship dynamics so you can create and sustain a healthy connection.'
          }
        />
        <Faq
          title={'Family Therapy'}
          content={
            'From parenting to conflict, I do my best to help families with adolescents or adult children leave behind the same old arguments and begin to feel truly seen and heard by one another.'
          }
        />
        <Faq
          title={'Discernment Counselling'}
          content={
            'Some couples may be considering divorce but are not completely sure that’s the best path. Discernment Counseling is a way of helping couples where one person is “leaning out” of the relationship—and not sure that regular couple therapy would help--and the other is“leaning in”—that is, interested in rebuilding the marriage. I can help these couples decide whether to try to restore the marriage to health, move toward divorce, or take a time out and decide later. We work together to help each person gain clarity and confidence about a direction, based on a deeper understanding of their relationship and its possibilities for the future.'
          }
        />
        <Faq
          title={'Online Therapy'}
          content={
            'It’s not always easy to meet with me in person and video therapy is a convenient and effective way to overcome barriers to in-person therapy.  Whether you choose to meet exclusively by video or through a combination of in-person and video, we can find an arrangement that meets your need for flexibility.'
          }
        />
        <h2 className="title">Supervision</h2>
        <Faq
          title={'Clinical Supervision'}
          content={
            'I offer clinical supervision for qualifying Registered Psychotherapists and Registered Marriage and Family Therapists who need to satisfy their clinical hours with CRPO and CAMFT. I am also available to meet with more seasoned psychotherapists looking to invest in professional development.'
          }
        />
      </InnerContainer>
    </div>
  )
}

export default ServicesFaq
