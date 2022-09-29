const Maps = () => {
    return ( 
        <div className="Map">
            {/*<GoogleMapReact
            bootstrapURLkeys={{key:'AIzaSyBoXMkW9PkumGYTh1GO1lJEriOIvyGzmBw'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}>
                <div>{coordinates.address}</div>
    </GoogleMapReact>*/}
    <iframe 
    src="https://maps.google.com/maps?width=600&amp;height=1978&amp;hl=en&amp;q=wisdom estate Oyo state Nigeria&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
    frameborder="0"
    className="w-100"
    style={{
        width:'100%',
        height:'100vh'
    }}></iframe>
        </div>
     );
}
 
export default Maps;