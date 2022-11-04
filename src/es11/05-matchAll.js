// *********************************** MATCHALL *********************************** //

const regex = /\b(amet)+\b/g;

const longString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis deleniti doloremque earum et eum expedita fugiat impedit iste, minus necessitatibus obcaecati, porro provident quaerat quam quasi reiciendis similique, ut.";

for (const match of longString.matchAll(regex)) {
  console.log(match);
}
