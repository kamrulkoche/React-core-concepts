const CountryData = ({ country }) => {
  //   console.log(country);
  return (
    <div>
      <p>
        <small>Country Name: {country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
