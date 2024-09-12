import React from 'react'
import './aboutInfo.scss'
import '../../../styles/style.scss'
import InnerContainer from '../../shared/InnerContainer/InnerContainer'
import Arrow from '../../../svg/long-arrow.svg'
import RightArrow from '../../../svg/arrow-right-blue.svg'

export default () => (
  <section id="about-info" className="aboutInfoWrapper">
    <InnerContainer>
      <div className="creds">
        <h3 className="text-center title">Credentials</h3>
        {/* <Arrow /> */}
        <div className="flex columns">
          <p>
            I am a Registered Psychotherapist with the College of Registered
            Psychotherapists of Ontario (CRPO), a Registered Marriage and Family
            Therapist with the Canadian Association for Marriage and Family
            Therapy (CACFT), and a qualified Supervisor.
          </p>
          <p>
            I hold a Masters degree in Counselling and an Honours degree in
            Psychology. Professional development is a priority for me and I
            regularly attend training that enhances my therapeutic skills.
          </p>
        </div>
      </div>
      <h3 className="text-center title">Areas of Interest</h3>
      {/* <Arrow /> */}
      <div className="flex columns">
        <div className="column left">
          <div className="infoSection">
            <p className="sectionTitle">Anxiety</p>
            <p className="sectionSubTitle">
              I help clients understand and heal their relationship with anxiety
              in general and I love working with perfectionism and social
              anxiety in particular.
            </p>
            <p className="sectionTitle">Trauma</p>
            <p className="sectionSubTitle">
              Many clients have been through painful experiences that
              overwhelmed their capacity to cope. These experiences often
              continue to show up in ways that negatively affect their present
              life, such as anxiety, depression, addictions, and relationship
              struggles. I enjoy helping clients build the skills they need to
              overcome the effects of trauma and begin to experience inner
              trust.
            </p>
          </div>
        </div>

        <div className="column right">
          <div className="infoSection">
            <p className="sectionTitle">Relationships</p>
            <ul className="relationships-list">
              <li>
                <strong>Relationship Enrichment:</strong> For couples wanting to
                move toward more loving and satisfying relationships, I support
                them every step of the way
              </li>
              <li>
                <strong>Relationship Discernment:</strong> I work with couples
                that are at a crossroads in their relationship to discern the
                future of their relationship and move toward a mutually
                satisfying outcome.
              </li>
              <li>
                <strong>Infidelity:</strong> Whether infidelity is undisclosed,
                has just been uncovered, or continues to be a wedge in the
                relationship despite the passage of time, I work with couples to
                recover from its impact in a way that fits their unique
                circumstances.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Arrow /> */}
    </InnerContainer>
  </section>
)
