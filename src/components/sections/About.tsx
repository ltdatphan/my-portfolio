import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <section id="about" className="">
            <div className="py-24 flex flex-col gap-8">
                <p>
                    As a recent Computer Science graduate, I am enthusiastic
                    about launching my career in Software Development. My
                    academic journey equipped me with a solid foundation in
                    programming languages such as Python, C#, and Java, along
                    with proficiency in web technologies including HTML, CSS,
                    JavaScript, and React.
                </p>
                <p>
                    With a year of hands-on experience as a Software Development
                    Intern at various companies, I've honed my skills and gained
                    valuable insights into the industry. This internship exposed
                    me to real-world challenges, allowing me to apply
                    theoretical knowledge to practical scenarios.
                </p>
                <p>
                    Let’s connect and discuss how I can help add value to your
                    team!
                </p>
            </div>
        </section>
    )
}

export default About
