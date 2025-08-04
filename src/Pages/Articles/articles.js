import Massage_Guide from "../../assets/images/articles/massage-guide.jpg";
import SkinCare from "../../assets/images/articles/skincare-secrets.jpg";
import PrenatalMassage from "../../assets/images/articles/prenatal-massage.jpg";
import Nanyuki from "../../assets/images/articles/nanyuki-spa.jpg";
import DecorImage from "../../assets/images/articles/decor.jpg"; // Import the decor image
import MassageBenefitsImage from "../../assets/images/articles/massage-benefits.jpg"; // Import the massage benefits image
import SkincareProducts from "../../assets/images/articles/skincare-products.jpg"; // Import the skincare products image

// This file will contain your static article data
const articles = [
  {
    id: "1",
    title:
      "Maggie's Spa Expands Its Sanctuary: Now Nurturing Mothers in Nanyuki!",
    image: Nanyuki, // Imported image variable
    alt: "Interior of Maggie's Spa Nanyuki branch, a serene spa setting.",
    author: "Maggie's Spa Team",
    date: "July 31, 2025",
    excerpt:
      "Maggie's Pregnancy & Postpartum Spa is thrilled to announce the grand opening of its second branch in Nanyuki, bringing specialized maternal wellness to the Mount Kenya region.",
    content: `
    <p><strong>Nanyuki, Kenya – July 31, 2025</strong> – For years, Maggie's Pregnancy & Postpartum Spa has been a cherished haven in Nairobi, offering unparalleled pre and postnatal wellness services to expecting and new mothers. Today, we're thrilled to announce a significant milestone in our journey: the grand opening of our second branch in the vibrant town of Nanyuki!</p>

    <p>This expansion brings Maggie's Spa's unique blend of expert care, luxurious comfort, and holistic well-being to the heart of Laikipia County, making specialized maternal wellness more accessible to women in the Mount Kenya region and beyond.</p>

    <h2>A Decade of Dedicated Care, Now Closer to You</h2>
    <p>With over a decade of experience, Maggie's Spa has built a reputation as a sanctuary where mothers can find solace, healing, and rejuvenation. From therapeutic prenatal massages that ease pregnancy discomforts to restorative postpartum treatments aiding recovery, our services are meticulously designed to support women through every stage of their incredible journey into motherhood.</p>

    <p>"We've seen the profound impact our specialized care has on mothers in Nairobi, and the demand for our services outside the capital has grown immensely," says Maggie, Founder of Maggie's Pregnancy & Postpartum Spa. "Nanyuki, with its serene environment and growing community, felt like the natural next step. We are incredibly excited to extend our nurturing touch to the mothers here, providing them with the dedicated space and expertise they deserve."</p>

    <h2>What Nanyuki Mothers Can Expect</h2>
    <p>The new Nanyuki branch, conveniently located at <strong>Shop 14 Restaurant, Nanyuki Town</strong>, is designed with the same ethos of tranquility and comfort that defines our Karen location. It will offer a comprehensive menu of Maggie's Spa's signature services, including:</p>
    
    <ul>
      <li><strong>Prenatal Massages:</strong> Tailored to safely relieve aches, improve circulation, and promote relaxation during pregnancy.</li>
      <li><strong>Postpartum Recovery Massages:</strong> Focused on easing physical stress, supporting recovery, and restoring balance after childbirth.</li>
      <li><strong>Specialized Skincare:</strong> Facials and treatments designed to address unique skin concerns during and after pregnancy.</li>
      <li><strong>Belly Binding Therapy:</strong> Traditional support for postpartum recovery.</li>
      <li><strong>Women's Wellness & Fertility Therapies:</strong> Holistic approaches to overall feminine health.</li>
    </ul>

    <p>Every treatment is performed by our highly trained and certified therapists who understand the delicate needs of the maternal body, ensuring a safe, effective, and deeply relaxing experience.</p>

    <h2>A Community-Centric Approach</h2>
    <p>More than just a spa, Maggie's aims to become a supportive hub for Nanyuki's maternal community. We believe that self-care for mothers isn't a luxury, but a necessity, fostering not just physical healing but also emotional well-being.</p>

    <p>We invite all expecting mothers, new mothers, and women simply seeking a moment of peace and expert care to visit our beautiful new Nanyuki location. Discover why Maggie's Spa is trusted by leading maternal wellness partners across Kenya.</p>

    <h2>Visit Us in Nanyuki!</h2>
    <p><strong>Location:</strong> Shop 14 Restaurant, Nanyuki Town, Nanyuki<br />
    <strong>Opening Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM<br />
    <strong>Book your appointment today:</strong> 
    <a href="/book" style="color: #01a1a1; font-weight: bold; text-decoration: none;">Book Online Now</a> 
    or call 
    <a href="tel:+254796125105" style="color: #01a1a1; font-weight: bold; text-decoration: none;">+254796125105</a></p>

    <p>Welcome to your new sanctuary, Nanyuki Mamas! We can't wait to pamper you.</p>
  `,
    // New property for the decor image
    decorImage: DecorImage,
  },
  {
    id: "2",
    title: "The Ultimate Guide to Relaxation Massages",
    image: Massage_Guide, // Add some placeholder images in your public/images/articles folder
    alt: "Relaxation massage session",
    author: "Maggie's Spa",
    date: "July 25, 2025",
    excerpt:
      "Discover the many benefits of relaxation massages and how they can improve your overall well-being. From Swedish to aromatherapy, find your perfect escape.",
    content: `
    <p>Relaxation massages are more than just a luxurious treat; they are a vital component of a healthy lifestyle, helping to reduce stress, ease muscle tension, and promote mental clarity. At Maggie's Spa, we offer a variety of massage therapies designed to melt away your worries and rejuvenate your spirit.</p>
    <h2>Types of Relaxation Massages</h2>
    <h3>Swedish Massage</h3>
    <p>The most popular form of massage, Swedish massage involves long, flowing strokes, kneading, and circular movements on the topmost layers of muscles. It's designed to promote relaxation, improve circulation, and relieve superficial muscle tension.</p>
    <h3>Aromatherapy Massage</h3>
    <p>This massage combines the power of touch with the therapeutic benefits of essential oils. Depending on the oils used, it can be deeply relaxing, energizing, or stress-reducing. Our therapists will help you choose the perfect blend for your needs.</p>
    <h3>Hot Stone Massage</h3>
    <p>Experience deep relaxation with smooth, heated stones placed on specific points of your body. The heat from the stones helps to warm and relax muscles, allowing the therapist to apply deeper pressure without discomfort.</p>
    <h2>Benefits of Regular Relaxation Massages</h2>
    <ul>
      <li>Reduces stress and anxiety</li>
      <li>Improves sleep quality</li>
      <li>Boosts mood and energy levels</li>
      <li>Relieves muscle soreness and stiffness</li>
      <li>Enhances blood circulation</li>
      <li>Promotes a sense of calm and well-being</li>
    </ul>
    <p>Regular relaxation massages are an investment in your health. Talk to our expert therapists to find out which massage is right for you and start your journey to a more relaxed and balanced life.</p>
    `,
    // New property for the massage benefits image
    massageBenefitsImage: MassageBenefitsImage,
  },
  {
    id: "3",
    title: "Skincare Secrets for Glowing Skin",
    image: SkinCare,
    alt: "Woman with glowing skin",
    author: "Dr. Maggy Beauty",
    date: "July 18, 2025",
    excerpt:
      "Unlock the secrets to radiant, healthy skin with our expert tips and recommended routines. Learn about hydration, exfoliation, and protection.",
    content: `
    <p>Achieving glowing skin requires more than just good genetics; it involves a consistent and tailored skincare routine. At Maggie's Spa, we believe in nurturing your skin with the best products and techniques.</p>
    <h2>Your Daily Skincare Routine</h2>
    <ol>
      <li><strong>Cleanse:</strong> Start your day and end your night with a gentle cleanser to remove impurities and prepare your skin for treatment.</li>
      <li><strong>Tone:</strong> A good toner balances your skin's pH and adds an extra layer of hydration.</li>
      <li><strong>Serum:</strong> Target specific concerns like fine lines, hyperpigmentation, or dryness with a concentrated serum.</li>
      <li><strong>Moisturize:</strong> Lock in hydration and protect your skin's barrier with a suitable moisturizer for your skin type.</li>
      <li><strong>SPF (Daytime):</strong> Non-negotiable! Protect your skin from harmful UV rays, which are the leading cause of premature aging.</li>
    </ol>
    <h2>Key Ingredients to Look For</h2>
    <ul>
      <li><strong>Hyaluronic Acid:</strong> For intense hydration.</li>
      <li><strong>Vitamin C:</strong> Brightens skin and protects against environmental damage.</li>
      <li><strong>Retinoids:</strong> Boost cell turnover and reduce wrinkles (use at night).</li>
      <li><strong>Niacinamide:</strong> Reduces inflammation and improves skin barrier function.</li>
    </ul>
    <p>Remember, consistency is key. Listen to your skin and adjust your routine as needed. For personalized advice, book a skin consultation with our estheticians.</p>
    `,
    // New property for the skincare products image
    skincareProductsImage: SkincareProducts,
  },
  {
    id: "4",
    title: "Benefits of Prenatal Massage for Expecting Mothers",
    image: PrenatalMassage,
    alt: "Pregnant woman receiving massage",
    author: "Maggie's Spa Maternity Team",
    date: "July 10, 2025",
    excerpt:
      "Prenatal massage offers numerous benefits for expectant mothers, helping to alleviate discomforts associated with pregnancy.",
    content: `
    <p>Pregnancy brings wonderful changes, but also its share of aches and pains. Prenatal massage is a therapeutic bodywork technique specifically designed to address the unique needs of expectant mothers. It’s a safe and effective way to relieve many of the common discomforts during pregnancy.</p>
    <h2>Why Prenatal Massage?</h2>
    <p>Our certified therapists use special cushioning systems or side-lying positions to ensure comfort and safety for both mother and baby. The focus is on relaxation, reducing stress, and targeting specific areas of discomfort.</p>
    <h2>Key Benefits:</h2>
    <ul>
      <li><strong>Reduces Back and Joint Pain:</strong> Alleviates pain in the lower back, pelvis, and hips often caused by the shifting center of gravity.</li>
      <li><strong>Improves Circulation:</strong> Helps reduce swelling (edema) in the hands, feet, and ankles by increasing blood and lymph circulation.</li>
      <li><strong>Reduces Muscle Tension:</strong> Relaxes tense muscles, particularly in the neck, shoulders, and back.</li>
      <li><strong>Lessens Headaches:</strong> Can help relieve tension headaches.</li>
      <li><strong>Improves Sleep:</strong> Promotes relaxation, leading to better sleep quality.</li>
      <li><strong>Reduces Stress and Anxiety:</strong> Provides a calming and nurturing experience during a period of significant change.</li>
    </ul>
    <p>Always consult with your healthcare provider before booking a prenatal massage, especially if you have any high-risk conditions.</p>
    `,
  },
];

export default articles;
