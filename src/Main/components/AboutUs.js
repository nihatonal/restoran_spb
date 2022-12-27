import React from 'react';

import SectionCard from '../../shared/UI/SectionCard';

import './AboutUs.css';
function AboutUs(props) {
    return (
        <SectionCard subtitle='о ресторане'>
            <h2 className="section-title">
                Food Exxe Relo
            </h2>
            <p className="section-desc">
                Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.
            </p>
            <p className="section-desc">
                Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat vel. At.'
            </p>
        </SectionCard>

    );
}

export default AboutUs;