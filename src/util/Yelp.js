import SearchBar from "../components/SearchBar/SearchBar";

const apiKey = 'sOwWCtBrgO8Ds-23KIyD1js8uAN_hTaCWUl_XanVaz3WQm0O2chz-MFTw9YRpeA0aKfZdbB0c1ef6QgbHRNggfaj3aQBKTYI82tnsTUplCIxmqYhGeCR7A4hM-4JYHYx';


const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse.businesses) {
            
          return jsonResponse.businesses.map(business => ({
           
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
  export default Yelp;