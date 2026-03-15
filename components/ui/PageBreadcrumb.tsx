'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface PageBreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export default function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <div className="mb-6">
      <Breadcrumb>
        <BreadcrumbList>
              {items.map((item, index) => (
                <Fragment key={index}>
                  <BreadcrumbItem>
                    {item.href && index < items.length - 1 ? (
                      <BreadcrumbLink asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < items.length - 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

