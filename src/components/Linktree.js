import React, { Component } from 'react';
import newSCImage from './latstSoundCloudImg.png'
import oldSCImage from './oldersoundcloudimg.png'

// Individual Link Component
class Link extends Component {
  render() {
    const { url, description, image } = this.props;

    return (
      <div className="link-card">
        {image && <img src={image} alt={description} />} {/* Optional image */}
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Go to link
        </a>
      </div>
    );
  }
}

// LinkTree Component containing a list of links
class LinkTree extends Component {
  render() {
    // Define your individual links here with their respective properties
    const links = [
      {
        url: 'https://soundcloud.com/exitparadise',
        description: 'Latest Soundcloud (since 2021)',
        image: newSCImage,
      },
      {
        url: 'https://soundcloud.com/exitfromparadise',
        description: 'Older Soundcloud (2015-2018)',
        image: oldSCImage,
      },
      {
        url: 'https://soundcloud.com/exitfromparadise2',
        description: 'Newer Soundcloud (2018-2021)'
      },
      {
        url: 'https://soundcloud.com/squarepi',
        description: 'Pi Squared Side Project'
      },
      {
        url: 'https://soundcloud.com/witnessofgomorrah',
        description: 'Witness Of Gomorrah Side Project'
      },
      {
        url: 'https://soundcloud.com/backthegrow',
        description: 'Back The Grow Side Project'
      },
      {
        url: 'https://soundcloud.com/exit_from_paradise',
        description: 'EFP Originals (2010-2015)'
      },
      {
        url: 'https://soundcloud.com/projektarmageddon',
        description: 'Progeddon Armajekt (Mixery Tuesday)'
      },
      {
        url: 'https://exitfromparadise.bandcamp.com/',
        description: 'Bandcamp'
      },
      {
        url: 'https://www.youtube.com/channel/UCTL3jDLjZSd00s46RutwkAw?view_as=subscriber',
        description: 'Youtube'
      },
      
     
      


      
      

      
      // Add more links as needed
    ];

    return (
    <section id="linktree">
        <div class="linktree-header">
          <h2>Link Tree</h2>
        </div>
        <div class="linktree-content">
      <div className="link-tree">
        <div className="link-list">
          {links.map((link, index) => (
            <Link
              key={index}
              url={link.url}
              description={link.description}
              image={link.image}
            />
          ))}
        </div>
        </div>
      </div>
      </section>
    );
  }
}

export default LinkTree;