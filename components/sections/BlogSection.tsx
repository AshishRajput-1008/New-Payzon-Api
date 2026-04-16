import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import HeadingBlock from "@/components/ui/HeadingBlock";
import SectionDecoration from "@/components/ui/SectionDecoration";
import shape_nate_17 from "@/public/assets/images/Blog Section/shape_nate_17.svg";
import shape_nate_18 from "@/public/assets/images/Blog Section/shape_nate_18.svg";
import blog_image_13 from "@/public/assets/images/Blog Section/blog_image_13.webp";
import blog_image_14 from "@/public/assets/images/Blog Section/blog_image_14.webp";
import blog_image_15 from "@/public/assets/images/Blog Section/blog_image_15.webp";


const shapes = [
  { className: "shape_nate_1", image: shape_nate_17.src, alt: "Shape Nate" },
  { className: "shape_nate_2", image: shape_nate_18.src, alt: "Shape Nate" },
];

export default function BlogSection() {
  return (
    <section className="ps_blog_section section_space section_decoration">
      <div className="container">
        <HeadingBlock badge="Our Article" title="Our Latest Article" />

        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4">
              <div className="blog_post_block style_2">
                <div className="post_image">
                  <Link href={post.href}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={`Blog Post Image ${index + 1}`} />
                  </Link>
                </div>
                <div className="post_content">
                  <ul className="post_meta unordered_list text-uppercase">
                    <li>
                      <Link href="#">
                        <span className="meta_label">{post.category}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="meta_label">{post.date}</span>
                      </Link>
                    </li>
                  </ul>
                  <h3 className="post_title mb-0">
                    <Link href={post.href}>{post.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionDecoration shapes={shapes} />
    </section>
  );
}