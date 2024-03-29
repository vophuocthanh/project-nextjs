import { API_URL } from '@/config';
import { PropertyItemData } from '@/types/property.types';
import axios from 'axios';

const example = {
  title: 'Metro Jayakarta Hotel & Spa',
  address: 'North NewYork, USA',
  info: { beds: 3, baths: 1, area: '38M' },
  status: 'sale',
  type: 'apartment',
  price: 7500,
  image: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80',
    'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
  ],
  country: 'USA',
  facility: ['Wifi', 'Smooking Area', 'Parking Area', 'Balcony', 'Kitchen'],
  description:
    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  rating: 4.5,
  state: 'North Carolina',
  agent: {
    name: 'Hussain Ahmed',
    phone: '+1 234 567 890',
    address: 'North Carolina, USA',
    properties: 10,
  },
};

export async function getProperties() {
  try {
    const response = await axios.get(`${API_URL}/property`);
    if (response.status === 200) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.log('getProperties ~ error:', error);
  }
}
export async function addNewProperty() {
  try {
    const response = await axios.post(`${API_URL}/property/create`, {
      ...example,
    });
    return [];
  } catch (error) {
    console.log('error:', error);
  }
}

export async function getProperty(
  id: number
): Promise<PropertyItemData | null | undefined> {
  try {
    const response = await axios.get(`${API_URL}/property/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log('getProperties ~ error:', error);
  }
}
