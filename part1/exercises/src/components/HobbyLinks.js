

const HobbyLinks= () => {
    let hobbyLinks= ["https://recipes.chefannfoundation.org/?gclid=CjwKCAjw5remBhBiEiwAxL2M9_5j0q36Bay_IUZ1TEnpl7QjCgXO7HOSncwTcQpKG1fkAc_rEQv5jRoCM_4QAvD_BwE", "https://www.everydayhealth.com/"]
    return(
        <div>
            <h3>My Hobbies</h3>
            <ul>
        <li><a href = {hobbyLinks[0]}>chefannfoundation</a></li>
        <li><a href = {hobbyLinks[1]}>everydayhealth</a></li>
        </ul>
        </div>
    )
}

export default HobbyLinks;