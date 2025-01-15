import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalContact extends Struct.ComponentSchema {
  collectionName: 'components_global_contacts';
  info: {
    description: '';
    displayName: 'Contact';
    icon: 'priceTag';
  };
  attributes: {
    blank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    height: Schema.Attribute.Integer;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    iconame: Schema.Attribute.String;
    short: Schema.Attribute.String;
    url: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface GlobalGallery extends Struct.ComponentSchema {
  collectionName: 'components_global_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    header: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface GlobalLink extends Struct.ComponentSchema {
  collectionName: 'components_global_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
  };
  attributes: {
    blank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface GlobalPartners extends Struct.ComponentSchema {
  collectionName: 'components_global_partners';
  info: {
    displayName: 'Partners';
    icon: 'oneToMany';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface GlobalSocials extends Struct.ComponentSchema {
  collectionName: 'components_global_socials';
  info: {
    displayName: 'Socials';
    icon: 'manyToOne';
  };
  attributes: {
    blank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface LayoutAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_layout_aboutuses';
  info: {
    description: '';
    displayName: 'AboutUs';
    icon: 'grid';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface LayoutAttraction extends Struct.ComponentSchema {
  collectionName: 'components_layout_attractions';
  info: {
    displayName: 'Attraction';
    icon: 'brush';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.link', false>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'Cta';
    icon: 'magic';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.link', false>;
    content: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'book';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.link', false>;
    header: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    subheader: Schema.Attribute.String;
  };
}

export interface LayoutHouseInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_house_infos';
  info: {
    displayName: 'HouseInfo';
    icon: 'bell';
  };
  attributes: {
    header: Schema.Attribute.String;
    items: Schema.Attribute.Component<'global.contact', true>;
  };
}

export interface LayoutHouses extends Struct.ComponentSchema {
  collectionName: 'components_layout_houses';
  info: {
    description: '';
    displayName: 'Houses';
    icon: 'house';
  };
  attributes: {
    button: Schema.Attribute.Component<'global.link', false>;
    content: Schema.Attribute.Text;
    imageOne: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    imageTwo: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface LayoutOffer extends Struct.ComponentSchema {
  collectionName: 'components_layout_offers';
  info: {
    description: '';
    displayName: 'Offer';
    icon: 'priceTag';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    button: Schema.Attribute.Component<'global.link', false>;
    description: Schema.Attribute.RichText;
    header: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    link: Schema.Attribute.String;
  };
}

export interface LayoutTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'crown';
  };
  attributes: {
    content: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.contact': GlobalContact;
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
