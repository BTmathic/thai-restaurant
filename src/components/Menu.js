import React from 'react';

{/* dark grey backdrop, menu on white overlay
  Full menu, description on top, spice/allergies on bottom 
  and main menu between on overlay
*/}


export default () => (
  <div>
    <div className='menu-header'>
      <div className='menu-section-text'>
        All of the items on our menu are made from scratch. From our famous spring rolls to our meal sized soups, and in house curries.
       We use only the freshest ingredients and our spices that are imported from Thailand are of the highest quality. This way
       you can enjoy our cuisine with all of its vibrant flavours to the fullest.
      </div>
    </div>
    <div className='menu'>
      <div className='menu-sections'>
        <div className='menu-option hovered'>
          APPETIZERS
        </div>
        <div className='menu-option'>
          SOUP
        </div>
        <div className='menu-option'>
          RICE
        </div>
        <div className='menu-option'>
          NOODLES
        </div>
        <div className='menu-option'>
          KIDS/EXTRAS
        </div>
      </div>
      <div id='menu-contents'>
        <div id='menu-appetizers' className='menu-section'>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Cambodian Spring Rolls (3)
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Crispy rolls with chicken, pork, vermicelli, mushroom and onions served with a Thai dipping sauce
              </span>
              <span className='menu-item-price'>
                5
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Tofu Spring Rolls (3)
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Crispy rolls with tofu, vegetables, vermicelli, mushroom and onions served with a Thai dipping sauce
              </span>
              <span className='menu-item-price'>
                6
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Vegetable Fresh Rolls (3)
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Soft rice paper rolls with lettuce, vermicelli, cucumber, carrots and basil served with a Thai dipping sauce
              </span>
              <span className='menu-item-price'>
                5
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Shrimp Fresh Rolls (3)
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Soft rice paper rolls with shrimp, lettuce, vermicelli, cucumber, carrots and basil served with a Thai dipping suace
              </span>
              <span className='menu-item-price'>
                8
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              Fish Cakes (10)
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Crispy mini fish cakes with cucumber and papaya salad topped with a sweet chili sauce
              </span>
              <span className='menu-item-price'>
                8
              </span>
            </div>
          </div>
        </div>
        <div id='menu-soup' className='menu-section'>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' /> Thai Tom Yum
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Shrimp, Thai mushrooms, lime leaf and lemongrass in a spicy tom yum broth, topped with basil and culantro
              </span>
              <span className='menu-item-price'>
                10
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              Coconut Chicken
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Chicken, Thai mushrooms, lime leaf and lemongrass in a sweet coconut broth, topped with coriander
              </span>
              <span className='menu-item-price'>
                10
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' /> Hot &amp; Sour Bamboo
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Chicken, bamboo shoots, green bean, eggplant, lime leaf and lemongrass in a spicy red curry broth, toppedwith basil
              </span>
              <span className='menu-item-price'>
                11
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Namya Soup
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Chicken, peanuts, sweet potato, green bean and eggplant in a creamy red curry broth
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              Coconut Green Curry
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Chicken, Thai mushrooms, bell peppers, lime leaf and lemongrass in a spicy green curry broth, topped withbasil
              </span>
              <span className='menu-item-price'>
                11
              </span>
            </div>
          </div>
        </div>
        <div id='menu-rice' className='menu-section'>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Thai Panang Curry
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Sweet and spicy red curry sauce with peanuts, topped with fresh basil and coconut milk
              </span>
              <span className='menu-item-option'>
                Vegetables
              </span>
              <span className='menu-item-price'>
                10
              </span>
              <span className='menu-item-option'>
                Tofu
              </span>
              <span className='menu-item-price'>
                10
              </span>
              <span className='menu-item-option'>
                Chicken
              </span>
              <span className='menu-item-price'>
                11
              </span>
              <span className='menu-item-option'>
                Shrimp
              </span>
              <span className='menu-item-price'>
                13
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              Thai Pineapple Chicken
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Chicken breast in a sweet and sour sauce with pineapple, tomatoes, coriander and green chilli
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Hot &amp; Sour Shrimp
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Stir fried shrimp in a hot and sour red curry sauce with green bean, bok choy, celery, onions and green chilli
              </span>
              <span className='menu-item-price'>
                11
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              Red Curry Stir Fry
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Stir fried chicken in a mild red curry sauce with peanuts, lemongrass, bell peppers, onions and green chilli
              </span>
              <span className='menu-item-price'>
                11
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Golden Chicken
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Tender peices of chicken thigh, slowly cooked in a hot and sour red curry sauce, topped with green chilli
              </span>
              <span className='menu-item-price'>
                11
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              Khmer Style
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Cambodian stir fry with chicken and shrimp in a sweet and sour tamarind sauce with, tomatoes, green bean, bok choy, celery,
               and onions
              </span>
              <span className='menu-item-price'>
                11
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              Thai Style
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Thai stir fry with chicken and shrimp in a spicy red chilli sauce with basil leaves, bok choy, celery, and onions
              </span>
              <span className='menu-item-price'>
                11
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              Beef Stir Fry
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Tender slices of beef in a sweet black pepper sauce with bell peppers, celery and onions
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              Siam Delight
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Sweet soya bean chilli paste, topped with green chilli, basil, culantro and freshly squeezed lemon juice
              </span>
              <span className='menu-item-option'>
                Tofu
              </span>
              <span className='menu-item-price'>
                10
              </span>
              <span className='menu-item-option'>
                Chicken
              </span>
              <span className='menu-item-price'>
                12
              </span>
              <span className='menu-item-option'>
                Shrimp
              </span>
              <span className='menu-item-price'>
                13
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              Thai Green Curry
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Stir fried chicken in a spicy green curry sauce with green bean, eggplant, and mixed vegetables
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              Kako Khmer
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Stir fried chicken in a lemongrass sauce with papaya, jackfruit, eggplant, green chilli, and mixed vegetables
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Spicy Coriander
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Chicken breast in a spicy red and yellow curry with tamarind, garlic and shallots, cooked with tomatoes and topped with
               fresh coriander
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              Green Curry Bamboo
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Bamboo shoots in a spicy green curry sauce, topped with fresh basil and coconut milk
              </span>
              <span className='menu-item-option'>
                Tofu
              </span>
              <span className='menu-item-price'>
                10
              </span>
              <span className='menu-item-option'>
                Chicken
              </span>
              <span className='menu-item-price'>
                11
              </span>
              <span className='menu-item-option'>
                Beef
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' />
              <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' />
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Red Curry Bamboo
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Bamboo shoots in a sweet and spicy red curry sauce with lime leaf, lemongrass, and green chilli, topped with fresh basil
               and coconut milk
              </span>
              <span className='menu-item-option'>
                Tofu
              </span>
              <span className='menu-item-price'>
                10
              </span>
              <span className='menu-item-option'>
                Chicken
              </span>
              <span className='menu-item-price'>
                11
              </span>
              <span className='menu-item-option'>
                Beef
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
        </div>
        <div id='menu-noodles' className='menu-section'>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Thai Vermicelli
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Vermicelli noodles, with lettuce, cucumber, basil and bean sprouts, topped with crispy Cambodian spring rolls and roasted
                peanuts
              </span>
              <span className='menu-item-price'>
                10
              </span>
              <span className='menu-item-option'>
                Add grilled chicken or pork
              </span>
              <span className='menu-item-price'>
                2
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Thai Rice Noodle
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Stir fried rice noodles, with lettuce, cucumber, basil and bean sprouts, topped with crispy Cambodian spring rolls and roasted
               peanuts
              </span>
              <span className='menu-item-price'>
                11
              </span>
              <span className='menu-item-option'>
                Add grilled chicken or pork
              </span>
              <span className='menu-item-price'>
                2
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              House Pad Thai
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Stir fried rice noodles with chicken and shrimp in a sweet tamarind sauce, garnished with fresh bean sprouts, green onion
               and roasted peanuts
              </span>
              <span className='menu-item-price'>
                12
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' />
              Tofu Pad Thai
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Stir fried rice noodles with tofu in a sweet tamarind sauce, garnished with fresh bean sprouts, green onion and roasted
               peanuts
              </span>
              <span className='menu-item-price'>
                10
              </span>
            </div>
          </div>
        </div>
        <div id='menu-kids-extra' className='menu-section'>
          <div className='menu-item'>
            <div className='menu-item-title'>
              Kids Meal
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Stir fried chicken in a sweet tamarind sauce, garnished with cucumber and tomato slices
              </span>
              <span className='menu-item-price'>
                6
              </span>
              <span className='menu-item-option'>
                Add shrimp
              </span>
              <span className='menu-item-price'>
                3
              </span>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              Drinks
            </div>
            <div className='menu-item-contents'>
              <span className='menu-item-description'>
                Coke, Diet Coke, Ginger Ale, Sprite, Root Beer
                </span>
              <span className='menu-item-price'>
                1.5
                </span>
              <div>
                <span className='menu-item-description'>
                  Iced Tea
                </span>
                <span className='menu-item-price'>
                  2
                </span>
              </div>
              <div>
                <span className='menu-item-description'>
                  Coconut Juice, Guava Juice, Mango Juice
                </span>
                <span className='menu-item-price'>
                  2.5
                </span>
              </div>
              <div>
                <span className='menu-item-description'>
                  Green Tea, Jasmine Tea
                </span>
                <span className='menu-item-price'>
                  2
                </span>
              </div>
            </div>
          </div>
          <div className='menu-item'>
            <div className='menu-item-title'>
              Extras
            </div>
            <div className='menu-item-contents'>
              <div>
                <span className='menu-item-description'>
                  Shrimp
                </span>
                <span className='menu-item-price'>
                  3
                </span>
                <span className='menu-item-description'>
                  Chicken
                </span>
                <span className='menu-item-price'>
                  2
                </span>
                <span className='menu-item-description'>
                  Beef
                </span>
                <span className='menu-item-price'>
                  2
                </span>
              </div>
              <div>
                <span className='menu-item-description'>
                  Pork
                </span>
                <span className='menu-item-price'>
                  2
                </span>
                <span className='menu-item-description'>
                  Tofu
                </span>
                <span className='menu-item-price'>
                  2
                </span>
                <span className='menu-item-description'>
                  Sauce
                </span>
                <span className='menu-item-price'>
                  1
                </span>
              </div>
              <div>
                <span className='menu-item-description'>
                  Peanuts
                </span>
                <span className='menu-item-price'>
                  1
                </span>
                <span className='menu-item-description'>
                  Coconut
                </span>
                <span className='menu-item-price'>
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='menu-footer'>
      <div className='menu-section-text'>
        Thai &amp; Cambodian cuisine is known for its spicy ingredients. Dishes marked with chili peppers indicate the level of
       spice from Medium to Very Spicy. Our food may also be in contact with peanuts, wheat and seafood products. Please inform
       us of any allergies, restrictions and preference before ordering.
      </div>
      <div className='menu-legend menu-section-text'>
        <div className='legend-item'>
          <img src='./Images/peanut.png' alt='peanut-icon' className='peanut-icon' /> Indicates dishes that contain peanuts
        </div>
        <div className='legend-item'>
          <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' /> Indicates dishes are already spicy
        </div>
        <div className='legend-item'>
          <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' /> Medium
          <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' /><img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' /> Spicy
          <img src='./Images/pepper.png' alt='spice-icon' className='spice-icon' /><img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' /><img src='./Images/pepper.png' alt='spice-icon' className='spice-icon spice-icon-narrow' /> Very Spicy
        </div>
      </div>
    </div>
  </div>
);