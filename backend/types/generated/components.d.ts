import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalAddress extends Schema.Component {
  collectionName: 'components_global_addresses';
  info: {
    displayName: 'Contact';
    icon: 'gate';
    description: '';
  };
  attributes: {
    value: Attribute.String;
    icon: Attribute.Media<'images'>;
    height: Attribute.Integer & Attribute.DefaultTo<20>;
    url: Attribute.String;
    blank: Attribute.Boolean & Attribute.DefaultTo<false>;
    iconame: Attribute.String;
  };
}

export interface GlobalGallery extends Schema.Component {
  collectionName: 'components_global_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'landscape';
  };
  attributes: {
    header: Attribute.String;
    images: Attribute.Media<'images', true>;
  };
}

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    blank: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface GlobalPartners extends Schema.Component {
  collectionName: 'components_global_partners';
  info: {
    displayName: 'Partners';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    logo: Attribute.Media<'images'>;
    name: Attribute.String;
  };
}

export interface GlobalSocials extends Schema.Component {
  collectionName: 'components_global_socials';
  info: {
    displayName: 'Socials';
    icon: 'manyToOne';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    icon: Attribute.String;
    blank: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutAboutUs extends Schema.Component {
  collectionName: 'components_layout_aboutuses';
  info: {
    displayName: 'AboutUs';
    icon: 'user';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    content: Attribute.Text;
    header: Attribute.String;
    link: Attribute.String;
  };
}

export interface LayoutAttraction extends Schema.Component {
  collectionName: 'components_layout_attractions';
  info: {
    displayName: 'Attraction';
    icon: 'crown';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media<'images'>;
    button: Attribute.Component<'global.link'>;
    offers: Attribute.Component<'layout.offer', true>;
  };
}

export interface LayoutCta extends Schema.Component {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'Cta';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
    image: Attribute.Media<'images'>;
    button: Attribute.Component<'global.link'>;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'layout';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    subheader: Attribute.String;
    button: Attribute.Component<'global.link'>;
    image: Attribute.Media<'images' | 'videos'> & Attribute.Required;
  };
}

export interface LayoutHouseInfo extends Schema.Component {
  collectionName: 'components_layout_house_infos';
  info: {
    displayName: 'HouseInfo';
    icon: 'house';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    items: Attribute.Component<'global.address', true>;
  };
}

export interface LayoutHouses extends Schema.Component {
  collectionName: 'components_layout_houses';
  info: {
    displayName: 'Houses';
    icon: 'house';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
    imageOne: Attribute.Media<'images'>;
    imageTwo: Attribute.Media<'images'>;
    button: Attribute.Component<'global.link'>;
  };
}

export interface LayoutOffer extends Schema.Component {
  collectionName: 'components_layout_offers';
  info: {
    displayName: 'Offer';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    header: Attribute.String;
    description: Attribute.RichText;
    link: Attribute.String;
  };
}

export interface LayoutTestimonials extends Schema.Component {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'heart';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.address': GlobalAddress;
      'global.gallery': GlobalGallery;
      'global.link': GlobalLink;
      'global.partners': GlobalPartners;
      'global.socials': GlobalSocials;
      'layout.about-us': LayoutAboutUs;
      'layout.attraction': LayoutAttraction;
      'layout.cta': LayoutCta;
      'layout.hero': LayoutHero;
      'layout.house-info': LayoutHouseInfo;
      'layout.houses': LayoutHouses;
      'layout.offer': LayoutOffer;
      'layout.testimonials': LayoutTestimonials;
    }
  }
}
