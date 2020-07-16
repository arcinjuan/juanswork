import React from 'react';

// icons
import { FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className="page">
      <div className="row">
				<div className="double-column">
					<h3>Hi There...</h3>
					<p>I'm a Creative Front End Developer with a passion for CSS and Responsive Design. I've been developing for over 10 years professionally. And have been working with React applications for about 3 years.</p>

					<p>In my past roles I have worked closely with both design and tech teams to create a bridge between the two. By doing this I have experienced the best of both worlds. On the design side, I've learned a lot about UX and UI, and on the tech side I've worked closely in version control environments with MVC frameworks to convert visions into applications</p>

					<p>The projects I've worked on have allowed me to work in both big and small groups. I've also had the pleasure of working with small startups, digital agencies, and giant corporations.</p>

					<p>To learn more about me feel free to visit my LinkedIn Profile <FaLinkedin /> .</p>
				</div>
				<div className="column">
					<h3>Languages</h3>
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Javascript</li>
					</ul>
					
					<h3>Frameworks</h3>
					<ul>
						<li>AngularJs</li>
						<li>ReactJs</li>
						<li>Redux</li>
						<li>Sass</li>
						<li>Less</li>
						<li>Bootstrap</li>
						<li>Foundation</li>
						<li>jQuery</li>
						<li>MVC</li>
					</ul>

					<h3>CMS</h3>
					<ul>
						<li>WordPress</li>
						<li>Joomla</li>
						<li>Drupal</li>
					</ul>
					
				</div>

				<div className="column">
					<h3>Design</h3>
					<ul>
						<li>Photoshop</li>
						<li>Fireworks</li>
						<li>Gimp</li>
					</ul>

					<h3>Patterns</h3>
					<ul>
						<li>Responsive Design</li>
						<li>Mobile First</li>
						<li>REST</li>
					</ul>

					<h3>Version Control</h3>
					<ul>
						<li>GitHub</li>
						<li>Mercurial</li>
					</ul>

					<h3>Tools</h3>
					<ul>
						<li>Sublime</li>
						<li>Jira</li>
					</ul>
				</div>
      </div>
    </div>
  );
}

export default About;
